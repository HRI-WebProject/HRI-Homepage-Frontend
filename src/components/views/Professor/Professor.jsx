import React from "react";
import ProfessorGrid from "@professor/sections/ProfessorGrid";
import styles from "@professor/Professor.module.css";
import { Tabs } from "antd";

function Professor() {
  const { TabPane } = Tabs;
  const professorData = [];

  for (let i = 0; i < 1; i++) {
    professorData.push({
      name: "ABC",
      description: "Professor",
      content: "descriptions",
    });
  }
  return (
    <div className={styles.container}>
      <Tabs tabPosition="left">
        <TabPane tab="교수진" key="1">
          <ProfessorGrid professorData={professorData} />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Professor;
