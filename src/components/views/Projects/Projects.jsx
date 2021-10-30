import React, { useEffect } from "react";
import { Row, Col } from "antd";
import styles from "@projects/Projects.module.css";
import Typography from "@mui/material/Typography";
import OngoingProject from "@projects/sections/OngoingProject";
import { ongoingList } from "@projects/sections/OngoingData";

function Projects() {
  return (
    <div className={styles.container}>
      <Typography variant="h6">
        <b>진행 중인 연구 프로젝트</b>
      </Typography>
      <Row gutter={[16, 16]} className={styles.out_row}>
        {ongoingList.map((item, idx) => (
          <Col span={12} key={idx}>
            <OngoingProject item={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Projects;
