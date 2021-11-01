import React from "react";
import styles from "@researcharea/ResearchArea.module.css";
import { Paper } from "@mui/material";
import { Row, Col } from "antd";

function Support() {
  return (
    <div>
      <Paper elevation={1} className={styles.paper_upper}>
        <ul>
          <li>
            <b>등록금/생활비</b> (전액/일부 지원)
          </li>
          <li>각종 연구 기자재 / 연구실 전용 공간 지원</li>
          <li>
            국내외 다양한 <b>학술대회 참가 지원</b>
          </li>
        </ul>
        <Row gutter={[16, 16]} className={styles.support_row}>
          <Col span={6}>
            <img
              className={styles.support_img}
              src="/assets/support/support1.jpg"
            />
          </Col>
          <Col span={6}>
            <img
              className={styles.support_img}
              src="/assets/support/support2.jpg"
            />
          </Col>
          <Col span={6}>
            <img
              className={styles.support_img}
              src="/assets/support/support3.jpg"
            />
          </Col>
          <Col span={6}>
            <img
              className={styles.support_img}
              src="/assets/support/support4.jpg"
            />
          </Col>
        </Row>
      </Paper>
    </div>
  );
}

export default Support;
