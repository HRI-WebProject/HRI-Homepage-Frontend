import React from "react";
import { Paper } from "@mui/material";
import styles from "@projects/Projects.module.css";
import Typography from "@mui/material/Typography";
import OngoingProject from "@projects/sections/OngoingProject";

function Projects() {
  return (
    <div className={styles.container}>
      <Typography variant="h6">
        <b>진행 중인 연구 프로젝트</b>
      </Typography>
      <OngoingProject />
    </div>
  );
}

export default Projects;
