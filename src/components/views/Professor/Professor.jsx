import React from "react";
import { useMediaQuery } from "react-responsive";
import ProfessorGrid from "@professor/sections/ProfessorGrid";
import styles from "@professor/Professor.module.css";
import TitleBar from "@titlebar/TitleBar";
import { Tabs } from "antd";

function Professor() {
  const { TabPane } = Tabs;
  const professorData = [];

  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1100px)",
  });

  for (let i = 0; i < 1; i++) {
    professorData.push({
      name: "ABC",
      description: "Professor",
      content: "descriptions",
    });
  }
  return (
    <div className={styles.container}>
      <TitleBar title="교수진" />
      <Tabs tabPosition="left">
        <TabPane tab="교수" key="1">
          <ProfessorGrid professorData={professorData} />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Professor;
