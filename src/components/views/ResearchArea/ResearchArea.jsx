import React from "react";
import { useMediaQuery } from "react-responsive";
import styles from "@researcharea/ResearchArea.module.css";
import { Paper } from "@mui/material";
import TitleBar from "@titlebar/TitleBar";
import Typography from "@mui/material/Typography";
import Research from "./sections/Research";
import Equipment from "@researcharea/sections/Equipment";
import Support from "@researcharea/sections/Support";

function ResearchArea() {
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1100px)",
  });
  return (
    <div className={styles.container}>
      <TitleBar title="연구 분야" />
      <Research />
      <Typography variant="h6">
        <b>연구실 장비</b>
      </Typography>
      <Equipment />
      <Typography variant="h6">
        <b>지원</b>
      </Typography>
      <Support />
    </div>
  );
}

export default ResearchArea;
