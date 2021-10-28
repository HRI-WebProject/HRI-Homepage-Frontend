import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import styles from "@board/Board.module.css";
import BoardList from "@board/sections/BoardList";
import ImageDataList from "@board/sections/ImageDataList";

function Board() {
  const { TabPane } = Tabs;
  return (
    <>
      <div className={styles.container}>
        <Tabs tabPosition="left">
          <TabPane tab="소식" key="1">
            <BoardList boardType="notice" />
          </TabPane>
          <TabPane tab="활동" key="2">
            <ImageDataList />
          </TabPane>
        </Tabs>
      </div>
    </>
  );
}

export default Board;
