import React, { useState, useEffect } from "react";
import Axios from "@api/index";
import { useMediaQuery } from "react-responsive";
import ProfessorGrid from "@professor/sections/ProfessorGrid";
import styles from "@professor/Professor.module.css";
import TitleBar from "@titlebar/TitleBar";
import { Paper } from "@mui/material";

function Professor() {
  const [professorData, setProfessorData] = useState();
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1100px)",
  });

  useEffect(() => {
    Axios.get("/professors").then((res) => {
      if (res.status === 200) {
        console.log(res.data.data);
        setProfessorData(res.data.data);
      } else {
        alert("Failed");
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
