import React, { useState, useEffect } from "react";
import TitleBar from "@titlebar/TitleBar";
import styles from "@members/Members.module.css";
import { Paper } from "@mui/material";
import TopMenu from "@topmenu/TopMenu";
import { useMediaQuery } from "react-responsive";
import Typography from "@mui/material/Typography";
import { Tabs, Divider, Menu } from "antd";
import {
  phdMembers,
  masterMembers,
  undergraduate,
} from "@members/sections/MemberData.js";
import MemberGrid from "@members/sections/MemberGrid";

function Members() {
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1100px)",
  });

  return (
    <div className={styles.container}>
      <TitleBar title="구성원" />
      <TopMenu selected_key="Members" />
      {isSmallScreen ? (
        <>
          <Paper className={styles.paper}>
            <Typography variant="h5">
              <b>박사 과정</b>
            </Typography>
            <MemberGrid memberData={phdMembers} col_size={24} />
            <hr className={styles.hrline} />
            <Typography variant="h5">
              <b>석사 과정</b>
            </Typography>
            <MemberGrid memberData={masterMembers} col_size={24} />
            <hr className={styles.hrline} />
            <Typography variant="h5">
              <b>학부 연구생</b>
            </Typography>
            <MemberGrid memberData={undergraduate} col_size={24} />
          </Paper>
        </>
      ) : (
        <Paper className={styles.paper}>
          <Typography variant="h5">
            <b>박사 과정</b>
          </Typography>
          <MemberGrid memberData={phdMembers} col_size={12} />
          <hr className={styles.hrline} />
          <Typography variant="h5">
            <b>석사 과정</b>
          </Typography>
          <MemberGrid memberData={masterMembers} col_size={12} />
          <hr className={styles.hrline} />
          <Typography variant="h5">
            <b>학부 연구생</b>
          </Typography>
          <MemberGrid memberData={undergraduate} col_size={12} />
        </Paper>
      )}
    </div>
  );
}

export default Members;
