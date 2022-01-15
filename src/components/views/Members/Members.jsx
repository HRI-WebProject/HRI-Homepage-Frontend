import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import TitleBar from "@titlebar/TitleBar";
import styles from "@members/Members.module.css";
import { Paper } from "@mui/material";
import TopMenu from "@topmenu/TopMenu";
import { useMediaQuery } from "react-responsive";
import MemberGrid from "@members/sections/MemberGrid";
import AddButton from "@common/AddButton/AddButton";

function Members() {
  const account = useSelector((state) => state.user.loginSuccess);
  const [isLogged, setIsLogged] = useState(false);
  const [phdMembers, setPhdMembers] = useState(); // 박사
  const [masterMembers, setMasterMembers] = useState(); // 석사
  const [bachelorMembers, setBachelorMembers] = useState(); // 학사
  const [undergraduate, setUndergraduate] = useState(); // 학부생

  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1100px)",
  });

  useEffect(() => {
    if (account && account.status === "OK") setIsLogged(true);
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
    <div>
      <TitleBar title="구성원" category="Members" />
      <div className={styles.container}>
        <TopMenu selected_key="Members" />
        {isSmallScreen ? (
          <>
            <Paper elevation={0} square className={styles.paper}>
              {isLogged && <AddButton />}
              <div className={styles.subtitle}>
                <b>박사 과정</b>
              </div>
              <MemberGrid
                memberData={phdMembers}
                col_size={24}
                degree="박사 과정"
                isLogged={isLogged}
              />
              <hr className={styles.hrline} />
              <div className={styles.subtitle}>
                <b>석사 과정</b>
              </div>
              <MemberGrid
                memberData={masterMembers}
                col_size={24}
                degree="석사 과정"
                isLogged={isLogged}
              />
              <hr className={styles.hrline} />
              <div className={styles.subtitle}>
                <b>학사 과정</b>
              </div>
              <MemberGrid
                memberData={bachelorMembers}
                col_size={12}
                degree="학사 과정"
                isLogged={isLogged}
              />
            </Paper>
          </>
        ) : (
          <Paper elevation={0} square className={styles.paper}>
            {isLogged && <AddButton />}
            <div className={styles.subtitle}>
              <b>박사 과정</b>
            </div>
            <MemberGrid
              memberData={phdMembers}
              col_size={12}
              degree="박사 과정"
              isLogged={isLogged}
            />
            <hr className={styles.hrline} />
            <div className={styles.subtitle}>
              <b>석사 과정</b>
            </div>
            <MemberGrid
              memberData={masterMembers}
              col_size={12}
              degree="석사 과정"
              isLogged={isLogged}
            />
            <hr className={styles.hrline} />
            <div className={styles.subtitle}>
              <b>학사 과정</b>
            </div>
            <MemberGrid
              memberData={bachelorMembers}
              col_size={12}
              degree="학사 과정"
              isLogged={isLogged}
            />
          </Paper>
        )}
      </div>
    </div>
  );
}

export default Members;
