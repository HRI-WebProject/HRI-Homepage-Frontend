import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import styles from "@board/Board.module.css";
import { Paper } from "@mui/material";
import TitleBar from "@titlebar/TitleBar";
import TopMenu from "@topmenu/TopMenu";
import BoardList from "@board/sections/BoardList";

function BoardDetail() {
  return (
    <div className={styles.container}>
      <TitleBar title="소식" />
      <TopMenu selected_key="Board" />
      <Paper className={styles.paper}>
        <table>
          <thead>
            <tr>
              <th>Topic</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lorem</td>
            </tr>
            <tr>
              <td>
                The paper entitled "Design of Miniaturized Incident
                Angle-Insensitive 2.45 GHz RF-Based Energy Harvesting System for
                IoT Applications"was accepted in IEEE Transactions on Antennas
                and Propagation. The authors are Jeong-Su Park, and Wang-Sang
                Lee.{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </Paper>
    </div>
  );
}

export default BoardDetail;
