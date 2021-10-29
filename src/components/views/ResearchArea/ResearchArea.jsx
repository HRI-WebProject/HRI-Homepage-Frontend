import React from "react";
import styles from "@researcharea/ResearchArea.module.css";
import { Paper } from "@mui/material";

function ResearchArea() {
  return (
    <div className={styles.container}>
      <Paper elevation={1} className={styles.paper}>
        <font className={styles.title}>연구 분야</font>
        <div>컴퓨터 비전 / 모바일로봇 / 지능시스템응용</div>
      </Paper>
    </div>
  );
}

export default ResearchArea;
