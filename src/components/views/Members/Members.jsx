import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import TitleBar from "@titlebar/TitleBar";
import MemberGrid from "@members/sections/MemberGrid";
import { Tabs, Divider } from "antd";
import styles from "@members/Members.module.css";
import Typography from "@mui/material/Typography";
import Alumni from "@members/sections/Alumni";
import {
  phdMembers,
  masterMembers,
  undergraduate,
} from "@members/sections/MemberData.js";

function Members() {
  const { TabPane } = Tabs;
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1100px)",
  });

  return (
    <div className={styles.container}>
      <TitleBar title="구성원" />
      <Tabs tabPosition="left">
        <TabPane tab="구성원" key="1">
          {isSmallScreen ? (
            <>
              <Typography variant="h5">
                <b>박사 과정</b>
              </Typography>
              <MemberGrid memberData={phdMembers} col_size={24} />
              <Divider dashed />
              <Typography variant="h5">
                <b>석사 과정</b>
              </Typography>
              <MemberGrid memberData={masterMembers} col_size={24} />
              <Divider dashed />
              <Typography variant="h5">
                <b>학부 연구생</b>
              </Typography>
              <MemberGrid memberData={undergraduate} col_size={24} />
              <Divider dashed />
            </>
          ) : (
            <>
              <Typography variant="h5">
                <b>박사 과정</b>
              </Typography>
              <MemberGrid memberData={phdMembers} col_size={12} />
              <Divider dashed />
              <Typography variant="h5">
                <b>석사 과정</b>
              </Typography>
              <MemberGrid memberData={masterMembers} col_size={12} />
              <Divider dashed />
              <Typography variant="h5">
                <b>학부 연구생</b>
              </Typography>
              <MemberGrid memberData={undergraduate} col_size={12} />
              <Divider dashed />
            </>
          )}
        </TabPane>
        <TabPane tab="졸업생" key="2">
          <Alumni />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Members;
