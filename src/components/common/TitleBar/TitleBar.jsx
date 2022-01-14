import React from "react";
import styles from "@titlebar/TitleBar.module.css";
import Typography from "@mui/material/Typography";
import Header from "@/components/common/Header/Header";

function TitleBar({ title, category }) {
  return (
    <div className={styles.titlebar}>
      <Header title={title} category={category} />
      <div className={styles.inner}>
        <Typography variant="h4">
          <b>{title}</b>
        </Typography>
      </div>
    </div>
  );
}

export default TitleBar;
