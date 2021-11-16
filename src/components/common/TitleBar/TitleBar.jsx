import React, { useState } from "react";
import styles from "@titlebar/TitleBar.module.css";
import { Row, Col, Breadcrumb } from "antd";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";

function TitleBar({ title }) {
  return (
    <div className={styles.titlebar}>
      <Breadcrumb separator=">" style={{ paddingBottom: "10px" }}>
        <Breadcrumb.Item href="/">
          <span>
            <HomeIcon className={styles.homeicon} fontSize="large" />홈
          </span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{title}</Breadcrumb.Item>
      </Breadcrumb>
      <Typography variant="h4">
        <b>{title}</b>
      </Typography>
    </div>
  );
}

export default TitleBar;
