import React from "react";
import styles from "../../Projects.module.css";
import { Paper } from "@mui/material";
import BudgetTable from "./BudgetTable";
import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";

function ProjectBudget() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <Fade top distance="30px">
        <Paper elevation={0} square className={styles.paper_upper}>
          <ul className={styles.pb_ul}>
            <li>
              <div className={styles.font1}>{t("projects-intro-1")}</div>
            </li>
            <li>
              <div className={styles.font1}>{t("projects-intro-2")}</div>
            </li>
          </ul>
          <BudgetTable />
        </Paper>
      </Fade>
    </div>
  );
}

export default ProjectBudget;
