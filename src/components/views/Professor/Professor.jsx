import React from "react";
import { useMediaQuery } from "react-responsive";
import ProfessorGrid from "@professor/sections/ProfessorGrid";
import styles from "@professor/Professor.module.css";
import TitleBar from "@titlebar/TitleBar";
import Sider from "@sider/Sider";

function Professor() {
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
      <div className={styles.ls}>
        <Sider selected_key="Professor" />
      </div>
      <div className={styles.rs}>
        <ProfessorGrid professorData={professorData} />
      </div>
    </div>
  );
}

export default Professor;
