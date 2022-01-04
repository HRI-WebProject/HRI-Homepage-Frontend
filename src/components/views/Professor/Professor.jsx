import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import ProfessorGrid from "@professor/sections/ProfessorGrid";
import styles from "@professor/Professor.module.css";
import TitleBar from "@titlebar/TitleBar";
import { Paper } from "@mui/material";
import AddButton from "@common/AddButton/AddButton";

function Professor() {
  const account = useSelector((state) => state.user.loginSuccess);
  const [isLogged, setIsLogged] = useState(false);
  const [professorData, setProfessorData] = useState();
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1100px)",
  });

  useEffect(() => {
    if (account && account.status === "OK") setIsLogged(true);

    axios
      .get("/professors")
      .then((res) => {
        if (res.status === 200) {
          setProfessorData(res.data.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <TitleBar title="교수진" />
      <Paper className={styles.paper}>
        {isLogged && <AddButton />}
        <ProfessorGrid professorData={professorData} isLogged={isLogged} />
      </Paper>
    </div>
  );
}

export default Professor;
