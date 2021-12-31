import React, { useState, useEffect } from "react";
import styles from "@board/Board.module.css";
import TitleBar from "@titlebar/TitleBar";
import TopMenu from "@topmenu/TopMenu";
import BoardList from "@board/sections/BoardList";

function Board() {
  return (
    <div className={styles.container}>
      <TitleBar title="소식" />
      <TopMenu selected_key="Board" />
      <BoardList />
    </div>
  );
}

export default Board;
