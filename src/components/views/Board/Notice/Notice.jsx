import React from "react";
import styles from "./Notice.module.css";
import TitleBar from "../../../common/TitleBar/TitleBar";
import TopMenu from "../../../common/TopMenu/TopMenu";
import BoardList from "./sections/BoardList";

function Notice() {
  return (
    <div>
      <TitleBar title="notice" category="Board" />
      <div className={styles.container}>
        <TopMenu selected_key="Board" />
        <BoardList />
      </div>
    </div>
  );
}

export default Notice;
