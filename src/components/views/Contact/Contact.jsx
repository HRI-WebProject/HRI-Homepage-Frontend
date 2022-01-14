import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "@contact/Contact.module.css";
import MapContainer from "@contact/sections/MapContainer";
import TitleBar from "@titlebar/TitleBar";
import { Row, Col } from "antd";
import { Paper, Divider, Typography } from "@mui/material";

function Contact() {
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1100px)",
  });

  return (
    <div>
      <TitleBar title="문의" category="Contact" />
      <div className={styles.container}>
        <Paper elevation={0} square className={styles.paper}>
          <Row>
            {isSmallScreen ? (
              <>
                <Col span={24}>
                  <MapContainer />
                </Col>
                <Col span={24} className={styles.col2}>
                  <div className={styles.namebox}>
                    <font className={styles.part}>Professor</font>
                    <font className={styles.name}>
                      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;정진우
                    </font>
                  </div>
                  <br />
                  <div className={styles.content}>
                    <font>
                      jwjung@dongguk.edu
                      <br />
                      02-2260-3812
                    </font>
                  </div>
                  <Divider className={styles.divider} />
                  <div className={styles.namebox}>
                    <font className={styles.part}>Lab Manager</font>
                    <font className={styles.name}>
                      &ensp;&ensp;&ensp;&ensp;강태원
                    </font>
                  </div>
                  <br />
                  <div className={styles.content}>
                    <font>
                      ktw3388@dongguk.edu
                      <br />
                      02-2290-1426
                    </font>
                  </div>
                  <Divider className={styles.divider} />
                  <div className={styles.namebox}>
                    <font className={styles.part}>Office</font>
                  </div>
                  <br />
                  <div style={{ paddingBottom: "20px" }}>
                    http://hri.dongguk.edu
                  </div>
                  <div className={styles.content}>
                    <font>
                      서울 중구 필동로1길 30 <br />
                      서울캠퍼스신공학관 5125호 인간로봇상호작용연구실
                      <br />
                      02-2290-1426
                    </font>
                  </div>
                </Col>
              </>
            ) : (
              <>
                <Col span={12}>
                  <MapContainer />
                </Col>
                <Col span={12} className={styles.col2}>
                  <div className={styles.namebox}>
                    <font className={styles.part}>Professor</font>
                    <font className={styles.name}>
                      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;정진우
                    </font>
                  </div>
                  <br />
                  <div className={styles.content}>
                    <font>
                      jwjung@dongguk.edu
                      <br />
                      02-2260-3812
                    </font>
                  </div>
                  <Divider className={styles.divider} />
                  <div className={styles.namebox}>
                    <font className={styles.part}>Lab Manager</font>
                    <font className={styles.name}>
                      &ensp;&ensp;&ensp;&ensp;강태원
                    </font>
                  </div>
                  <br />
                  <div className={styles.content}>
                    <font>
                      ktw3388@dongguk.edu
                      <br />
                      02-2290-1426
                    </font>
                  </div>
                  <Divider className={styles.divider} />
                  <div className={styles.namebox}>
                    <font className={styles.part}>Office</font>
                  </div>
                  <br />
                  <div style={{ paddingBottom: "20px" }}>
                    http://hri.dongguk.edu
                  </div>
                  <div className={styles.content}>
                    <font>
                      서울 중구 필동로1길 30 <br />
                      서울캠퍼스신공학관 5125호 인간로봇상호작용연구실
                      <br />
                      02-2290-1426
                    </font>
                  </div>
                </Col>
              </>
            )}
          </Row>
        </Paper>
      </div>
    </div>
  );
}

export default Contact;
