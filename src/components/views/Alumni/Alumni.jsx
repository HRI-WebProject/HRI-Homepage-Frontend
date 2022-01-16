import React, { useState, useEffect } from "react";
import axios from "axios";
import { Statistic, Row, Col } from "antd";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import { Paper } from "@mui/material";
import styles from "./Alumni.module.css";
import TitleBar from "../../common/TitleBar/TitleBar";
import TopMenu from "../../common/TopMenu/TopMenu";
import MemberGrid from "../Members/sections/MemberGrid";
import AddButton from "../../common/AddButton/AddButton";

function Alumni() {
  const account = useSelector((state) => state.user.loginSuccess);
  const [isLogged, setIsLogged] = useState(false);
  const [phdMembers, setPhdMembers] = useState(); // 박사
  const [masterMembers, setMasterMembers] = useState(); // 석사
  const [bachelorMembers, setBachelorMembers] = useState(); // 학사
  const [colSize, setColSize] = useState();

  const isSmallScreen = useMediaQuery({
    query: "(max-width: 600px)",
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
    if (isSmallScreen) setColSize(24);
    else setColSize(12);
  });

  useEffect(() => {
    if (account && account.status === "OK") setIsLogged(true);
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
    <div>
      <TitleBar title="졸업생" category="Members" />
      <div className={styles.container}>
        <TopMenu selected_key="Members" />
        {phdMembers && masterMembers && bachelorMembers && (
          <Paper elevation={0} square className={styles.paper}>
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
            <>
              <div className={styles.members}>
                {isLogged && <AddButton />}
                {phdMembers.length !== 0 && (
                  <>
                    <div className={styles.subtitle}>
                      <b>박사 과정</b>
                    </div>
                    <MemberGrid
                      memberData={phdMembers}
                      col_size={colSize}
                      degree="박사 과정"
                      isLogged={isLogged}
                    />
                    <hr className={styles.hrline} />
                  </>
                )}
                {masterMembers.length !== 0 && (
                  <>
                    <div className={styles.subtitle}>
                      <b>석사 과정</b>
                    </div>
                    <MemberGrid
                      memberData={masterMembers}
                      col_size={colSize}
                      degree="석사 과정"
                      isLogged={isLogged}
                    />
                    <hr className={styles.hrline} />{" "}
                  </>
                )}
                {bachelorMembers.length !== 0 && (
                  <>
                    <div className={styles.subtitle}>
                      <b>학사 과정</b>
                    </div>
                    <MemberGrid
                      memberData={bachelorMembers}
                      col_size={colSize}
                      degree="학사 과정"
                      isLogged={isLogged}
                    />
                  </>
                )}
              </div>
            </>
          </Paper>
        )}
      </div>
    </div>
  );
}

export default Alumni;
