import React, { useState, useEffect } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import { Statistic, Row, Col, Button } from "antd";
import { useMediaQuery } from "react-responsive";
import { Paper } from "@mui/material";
import styles from "@alumni/Alumni.module.css";
import TitleBar from "@titlebar/TitleBar";
import TopMenu from "@topmenu/TopMenu";
import MemberGrid from "@members/sections/MemberGrid";

function Alumni() {
  const [phdMembers, setPhdMembers] = useState(); // 박사
  const [masterMembers, setMasterMembers] = useState(); // 석사
  const [bachelorMembers, setBachelorMembers] = useState(); // 학사

  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1100px)",
  });

  const imageList = [
    "/assets/alumni/workplace1.png",
    "/assets/alumni/workplace2.png",
    "/assets/alumni/workplace3.png",
    "/assets/alumni/workplace4.png",
    "/assets/alumni/workplace5.png",
    "/assets/alumni/workplace6.png",
  ];

  useEffect(() => {
    // 졸업생 리스트
    axios
      .get("/members/PHD")
      .then((res) => {
        if (res.status === 200) {
          let tmp = res.data.data.filter(function (item, idx) {
            return item.graduate === true;
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
            return item.graduate === true;
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
            return item.graduate === true;
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
      <TitleBar title="졸업생" />
      <TopMenu selected_key="Members" />
      {phdMembers && masterMembers && bachelorMembers && (
        <Paper className={styles.paper}>
          <div
            style={{
              fontSize: "1.5em",
              fontWeight: "bold",
              padding: "10px 0px 5px 25px",
            }}
          >
            졸업생 현황
          </div>
          <div className={styles.alumni_row}>
            <Statistic
              title="박사"
              value={phdMembers ? phdMembers.length : 0}
              suffix="명"
              className={styles.stat}
            />
            <div className={styles.vertical_line} />
            <Statistic
              title="석사"
              value={masterMembers ? masterMembers.length : 0}
              suffix="명"
              className={styles.stat}
            />
            <div className={styles.vertical_line} />
            <Statistic
              title="학부연구생"
              value={bachelorMembers ? bachelorMembers.length : 0}
              suffix="명+"
              className={styles.stat}
            />
          </div>
          <div className={styles.workplace}>
            <Row gutter={[16, 16]}>
              {imageList.map((item, idx) => (
                <Col span={8} key={idx}>
                  <img className={styles.workplaceImg} src={item} />
                </Col>
              ))}
            </Row>
          </div>
          {isSmallScreen ? (
            <>
              <div className={styles.members}>
                {phdMembers.length !== 0 && (
                  <>
                    <Typography variant="h5">
                      <b>박사 과정</b>
                    </Typography>
                    <MemberGrid
                      memberData={phdMembers}
                      col_size={24}
                      degree="박사 과정"
                    />
                    <hr className={styles.hrline} />
                  </>
                )}
                {masterMembers.length !== 0 && (
                  <>
                    <Typography variant="h5">
                      <b>석사 과정</b>
                    </Typography>
                    <MemberGrid
                      memberData={masterMembers}
                      col_size={24}
                      degree="석사 과정"
                    />
                    <hr className={styles.hrline} />{" "}
                  </>
                )}
                {bachelorMembers.length !== 0 && (
                  <>
                    <Typography variant="h5">
                      <b>학사 과정</b>
                    </Typography>
                    <MemberGrid
                      memberData={bachelorMembers}
                      col_size={24}
                      degree="학사 과정"
                    />{" "}
                  </>
                )}
              </div>
            </>
          ) : (
            <>
              <div className={styles.members}>
                {phdMembers.length !== 0 && (
                  <>
                    <Typography variant="h5">
                      <b>박사 과정</b>
                    </Typography>
                    <MemberGrid
                      memberData={phdMembers}
                      col_size={12}
                      degree="박사 과정"
                    />
                    <hr className={styles.hrline} />
                  </>
                )}
                {masterMembers.length !== 0 && (
                  <>
                    <Typography variant="h5">
                      <b>석사 과정</b>
                    </Typography>
                    <MemberGrid
                      memberData={masterMembers}
                      col_size={12}
                      degree="석사 과정"
                    />
                    <hr className={styles.hrline} />{" "}
                  </>
                )}
                {bachelorMembers.length !== 0 && (
                  <>
                    <Typography variant="h5">
                      <b>학사 과정</b>
                    </Typography>
                    <MemberGrid
                      memberData={bachelorMembers}
                      col_size={12}
                      degree="학사 과정"
                    />{" "}
                  </>
                )}
              </div>
            </>
          )}
        </Paper>
      )}
    </div>
  );
}

export default Alumni;
