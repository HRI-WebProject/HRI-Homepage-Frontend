import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import ProfessorGrid from "./sections/ProfessorGrid";
import styles from "./Professor.module.css";
import TitleBar from "../../common/TitleBar/TitleBar";
import { Paper } from "@mui/material";
import AddButton from "../../common/AddButton/AddButton";

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
    <div>
      <TitleBar title="professor" category="Professor" />
      <div className={styles.container}>
        <Paper elevation={0} square className={styles.paper}>
          {isLogged && <AddButton />}
          <ProfessorGrid professorData={professorData} isLogged={isLogged} />
        </Paper>
      </div>
    </div>
  );
}

export default Professor;
