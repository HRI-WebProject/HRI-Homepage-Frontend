import React from "react";
import Typography from "@mui/material/Typography";
import { Statistic, Card, Row, Col, Button } from "antd";
import { Paper } from "@mui/material";
import styles from "@alumni/Alumni.module.css";
import TitleBar from "@titlebar/TitleBar";
import Sider from "@sider/Sider";

function Alumni() {
  return (
    <div className={styles.container}>
      <TitleBar title="졸업생" />
      <div className={styles.ls}>
        <Sider selected_key="Members" />
      </div>
      <div className={styles.rs}>
        <Typography variant="h5">
          <b>졸업생 현황</b>
        </Typography>
        <Paper className={styles.paper}>
          <div className={styles.alumni_row}>
            <Statistic
              title="박사"
              value={1}
              suffix="명"
              className={styles.stat}
            />
            <div className={styles.vertical_line} />
            <Statistic
              title="석사"
              value={12}
              suffix="명"
              className={styles.stat}
            />
            <div className={styles.vertical_line} />
            <Statistic
              title="학부연구생"
              value={10}
              suffix="명+"
              className={styles.stat}
            />
          </div>
          <div className={styles.workplace}>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <img
                  className={styles.workplaceImg}
                  src="/assets/alumni/workplace1.png"
                />
              </Col>
              <Col span={8}>
                <img
                  className={styles.workplaceImg}
                  src="/assets/alumni/workplace2.png"
                />
              </Col>
              <Col span={8}>
                <img
                  className={styles.workplaceImg}
                  src="/assets/alumni/workplace3.png"
                />
              </Col>
              <Col span={8}>
                <img
                  className={styles.workplaceImg}
                  src="/assets/alumni/workplace4.png"
                />
              </Col>
              <Col span={8}>
                <img
                  className={styles.workplaceImg}
                  src="/assets/alumni/workplace5.png"
                />
              </Col>
              <Col span={8}>
                <img
                  className={styles.workplaceImg}
                  src="/assets/alumni/workplace6.png"
                />
              </Col>
            </Row>
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default Alumni;
