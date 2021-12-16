import React, { useState, useEffect } from "react";
import TitleBar from "@titlebar/TitleBar";
import styles from "@members/Members.module.css";
import Sider from "@sider/Sider";
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
      <div className={styles.ls}>
        <Sider selected_key="Members" />
      </div>
      <div className={styles.rs}>
        {isSmallScreen ? (
          <>
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
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}

export default Members;
