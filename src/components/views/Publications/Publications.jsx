import React from "react";
import { Tabs } from "antd";
import styles from "./Publications.module.css";

function Publications() {
  const { TabPane } = Tabs;
  return (
    <div className={styles.container}>
      <Tabs tabPosition="left">
        <TabPane tab="학술지" key="1">
          학술지
        </TabPane>
        <TabPane tab="학술대회" key="2">
          학술대회
        </TabPane>
        <TabPane tab="특허" key="3">
          특허
        </TabPane>
        <TabPane tab="도서" key="4">
          도서
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Publications;
