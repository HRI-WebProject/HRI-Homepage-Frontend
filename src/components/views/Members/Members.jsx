import React, { useState, useEffect } from "react";
import MemberGrid from "./sections/MemberGrid";
import { Tabs } from "antd";
import styles from "./Members.module.css";

function Members() {
  const { TabPane } = Tabs;
  const memberData = [];
  for (let i = 0; i < 10; i++) {
    memberData.push({
      name: `${i + 1}`,
      description: "courese",
      content: "descriptions",
    });
  }
  const graduateData = [];
  for (let i = 0; i < 10; i++) {
    graduateData.push({
      name: `${i + 1}`,
      description: "courese",
      content: "descriptions",
    });
  }

  return (
    <>
      <div className={styles.container}>
        <Tabs tabPosition="left">
          <TabPane tab="구성원" key="1">
            <MemberGrid memberData={memberData} />
          </TabPane>
          <TabPane tab="졸업생" key="2">
            <MemberGrid memberData={graduateData} />
          </TabPane>
        </Tabs>
      </div>
    </>
  );
}

export default Members;
