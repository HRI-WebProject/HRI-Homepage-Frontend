import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Row, Col, Breadcrumb } from "antd";
import styles from "@projects/Projects.module.css";
import TitleBar from "@titlebar/TitleBar";
import Typography from "@mui/material/Typography";
import ProjectBudget from "@projects/sections/projectBudget/ProjectBudget";
import OngoingProject from "@projects/sections/ongoing/OngoingProject";
import { ongoingList } from "@projects/sections/ongoing/OngoingData";

function Projects() {
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1100px)",
  });
  return (
    <div className={styles.container}>
      <TitleBar title="프로젝트 소개" />
      <ProjectBudget />
      <Typography variant="h6">
        <b>진행 중인 연구 프로젝트</b>
      </Typography>
      <Row gutter={[16, 16]} className={styles.out_row}>
        {ongoingList.map((item, idx) => (
          <Col span={24} key={idx}>
            <OngoingProject item={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Projects;
