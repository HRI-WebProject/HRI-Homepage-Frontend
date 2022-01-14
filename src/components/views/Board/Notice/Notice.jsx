import React from "react";
import styles from "@notice/Notice.module.css";
import TitleBar from "@titlebar/TitleBar";
import TopMenu from "@topmenu/TopMenu";
import BoardList from "@/components/views/Board/Notice/sections/BoardList";

function Notice() {
  return (
    <div>
      <TitleBar title="소식" category="Board" />
      <div className={styles.container}>
        <TopMenu selected_key="Board" />
        <BoardList />
      </div>
    </div>
  );
}

export default Notice;
