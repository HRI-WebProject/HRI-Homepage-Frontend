import React, { useState, useEffect } from "react";
import styles from "@notice/Notice.module.css";
import TitleBar from "@titlebar/TitleBar";
import TopMenu from "@topmenu/TopMenu";
import BoardList from "@/components/views/Board/Notice/sections/BoardList";

function Notice() {
  return (
    <div className={styles.container}>
      <TitleBar title="소식" />
      <TopMenu selected_key="Board" />
      <BoardList />
    </div>
  );
}

export default Notice;
