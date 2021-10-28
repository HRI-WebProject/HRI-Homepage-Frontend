import React from "react";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import styles from "@members/Members.module.css";

function Alumni() {
  return (
    <div>
      <Typography variant="h6">졸업생 현황</Typography>
      <Typography variant="subtitle1" color="text.secondary">
        <div className={styles.lists}>
          박사: 1명
          <br />
          석사: 12명
          <br />
          학부연구생: 10명+
        </div>
      </Typography>
      <Typography variant="h6">Workplace</Typography>
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
