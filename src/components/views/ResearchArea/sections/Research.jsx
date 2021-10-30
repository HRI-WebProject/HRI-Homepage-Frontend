import React from "react";
import styles from "@researcharea/ResearchArea.module.css";
import { Paper } from "@mui/material";
import { Row, Col } from "antd";

function Research() {
  return (
    <div>
      <Paper elevation={1} className={styles.paper_upper}>
        연구 분야 소개
      </Paper>
    </div>
  );
}

export default Research;
