import React, { useState, useEffect } from "react";
import Axios from "@api/index";
import { useMediaQuery } from "react-responsive";
import ProfessorGrid from "@professor/sections/ProfessorGrid";
import styles from "@professor/Professor.module.css";
import TitleBar from "@titlebar/TitleBar";
import { Paper } from "@mui/material";

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

  useEffect(() => {
    Axios.get("professors/").then((res) => {
      if (res.status === 200) {
        console.log(res);
      } else {
        alert("register failed");
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      <TitleBar title="교수진" />
      <Paper className={styles.paper}>
        <ProfessorGrid professorData={professorData} />
      </Paper>
    </div>
  );
}

export default Professor;
