import React, { useState, useEffect } from "react";
import styles from "@activity/Activity.module.css";
import TitleBar from "@titlebar/TitleBar";
import Sider from "@sider/Sider";
import ImageDataList from "@activity/sections/ImageDataList";

function Activity() {
  return (
    <div className={styles.container}>
      <TitleBar title="활동" />
      <div className={styles.ls}>
        <Sider selected_key="Board" />
      </div>
      <div className={styles.rs}>{/* <ImageDataList /> */}</div>
    </div>
  );
}

export default Activity;
