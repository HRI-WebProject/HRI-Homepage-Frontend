import React from "react";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import styles from "@members/Members.module.css";

function Alumni() {
  return (
    <div>
      <Typography variant="h6">
        <b>졸업생 현황</b>
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        <div className={styles.lists}>
          <font color="#2f5597">박사</font>: 1명
          <br />
          <font color="#2f5597">석사</font>: 12명
          <br />
          <font color="#2f5597">학부연구생</font>: 10명+
        </div>
      </Typography>
      <Typography variant="h6">
        <b>Workplace</b>
      </Typography>
      <Paper elevation={3}>
        <img
          className={styles.workplaceImg}
          src="/assets/alumni/workplace.png"
        />
      </Paper>
    </div>
  );
}

export default Alumni;
