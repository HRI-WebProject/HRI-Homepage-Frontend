import React, { useState, useEffect } from "react";
import styles from "@board/Board.module.css";
import TitleBar from "@titlebar/TitleBar";
import Sider from "@sider/Sider";
import BoardList from "@board/sections/BoardList";

function Board() {
  return (
    <div className={styles.container}>
      <TitleBar title="소식" />
      <div className={styles.ls}>
        <Sider selected_key="Board" />
      </div>
      <div className={styles.rs}>{/* <BoardList /> */}</div>
    </div>
  );
}

export default Board;
