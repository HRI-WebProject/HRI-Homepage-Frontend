import React, { useState, useEffect } from "react";
import MemberGrid from "./sections/MemberGrid";
import ProfessorGrid from "./sections/ProfessorGrid";
import { Tabs } from "antd";
import styles from "./Members.module.css";

function Members() {
  const { TabPane } = Tabs;
  const professorData = [];
  for (let i = 0; i < 1; i++) {
    professorData.push({
      name: "ABC",
      description: "Professor",
      content: "descriptions",
    });
  }
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
          <TabPane tab="교수" key="1">
            <ProfessorGrid professorData={professorData} />
          </TabPane>
          <TabPane tab="구성원" key="2">
            <MemberGrid memberData={memberData} />
          </TabPane>
          <TabPane tab="졸업생" key="3">
            <MemberGrid memberData={graduateData} />
          </TabPane>
        </Tabs>
      </div>
    </>
  );
}

export default Members;
