import React from "react";
import styles from "@projects/Projects.module.css";
import { Paper } from "@mui/material";
import BudgetTable from "@projects/sections/projectBudget/BudgetTable";

function ProjectBudget() {
  return (
    <div>
      <Paper elevation={0} square className={styles.paper_upper}>
        <ul className={styles.pb_ul}>
          <li>
            <div className={styles.font1}>2006~2020 45개 사업 진행</div>
          </li>
          <li>
            <div className={styles.font1}>
              2020년 사업비 <font color="#ED7D31">약 4.5억원</font>
            </div>
          </li>
        </ul>
        <BudgetTable />
      </Paper>
    </div>
  );
}

export default ProjectBudget;
