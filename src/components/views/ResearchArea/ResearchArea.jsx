import React from "react";
import styles from "@researcharea/ResearchArea.module.css";
import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import Research from "@researcharea/sections/Research";
import Equipment from "@researcharea/sections/Equipment";
import Support from "@researcharea/sections/Support";

function ResearchArea() {
  return (
    <div className={styles.container}>
      <Typography variant="h5">
        <b>연구 분야</b>
      </Typography>
      <Research />
      <Typography variant="h6">
        <b>연구실 장비</b>
      </Typography>
      <Equipment />
      {/* <Typography variant="h6">
        <b>지원</b>
      </Typography>
      <Support /> */}
    </div>
  );
}

export default ResearchArea;
