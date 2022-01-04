import React, { useState, useEffect } from "react";
import axios from "axios";
import TitleBar from "@titlebar/TitleBar";
import styles from "@members/Members.module.css";
import { Paper } from "@mui/material";
import TopMenu from "@topmenu/TopMenu";
import { useMediaQuery } from "react-responsive";
import Typography from "@mui/material/Typography";
import { Tabs, Divider, Menu } from "antd";
import MemberGrid from "@members/sections/MemberGrid";

function Members() {
  const [phdMembers, setPhdMembers] = useState(); // 박사
  const [masterMembers, setMasterMembers] = useState(); // 석사
  const [bachelorMembers, setBachelorMembers] = useState(); // 학사
  const [undergraduate, setUndergraduate] = useState(); // 학부생

  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1100px)",
  });

  useEffect(() => {
    axios
      .get("/members/PHD")
      .then((res) => {
        if (res.status === 200) {
          let tmp = res.data.data.filter(function (item, idx) {
            return item.graduate === false;
          });
          tmp && setPhdMembers(tmp);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
      .get("/members/MASTER")
      .then((res) => {
        if (res.status === 200) {
          let tmp = res.data.data.filter(function (item, idx) {
            return item.graduate === false;
          });
          tmp && setMasterMembers(tmp);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
      .get("/members/BACHELOR")
      .then((res) => {
        if (res.status === 200) {
          let tmp = res.data.data.filter(function (item, idx) {
            return item.graduate === false;
          });
          tmp && setBachelorMembers(tmp);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <TitleBar title="구성원" />
      <TopMenu selected_key="Members" />
      {isSmallScreen ? (
        <>
          <Paper className={styles.paper}>
            <Typography variant="h5">
              <b>박사 과정</b>
            </Typography>
            <MemberGrid
              memberData={phdMembers}
              col_size={24}
              degree="박사 과정"
            />
            <hr className={styles.hrline} />
            <Typography variant="h5">
              <b>석사 과정</b>
            </Typography>
            <MemberGrid
              memberData={masterMembers}
              col_size={24}
              degree="석사 과정"
            />
          </Paper>
        </>
      ) : (
        <Paper className={styles.paper}>
          <Typography variant="h5">
            <b>박사 과정</b>
          </Typography>
          <MemberGrid
            memberData={phdMembers}
            col_size={12}
            degree="박사 과정"
          />
          <hr className={styles.hrline} />
          <Typography variant="h5">
            <b>석사 과정</b>
          </Typography>
          <MemberGrid
            memberData={masterMembers}
            col_size={12}
            degree="석사 과정"
          />
          <hr className={styles.hrline} />
          <Typography variant="h5">
            <b>학사 과정</b>
          </Typography>
          <MemberGrid
            memberData={bachelorMembers}
            col_size={12}
            degree="학사 과정"
          />
        </Paper>
      )}
    </div>
  );
}

export default Members;
