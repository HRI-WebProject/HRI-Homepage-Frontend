import React, { useState, useEffect } from "react";
import { Tabs, Row, Col, List, Space, Image } from "antd";
import styles from "./Members.module.css";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

function Members() {
  const { TabPane } = Tabs;
  const professorData = [];
  for (let i = 0; i < 1; i++) {
    professorData.push({
      name: "ABC",
      description: "Professor",
      content: "descriptions",
    });
  }
  const memberData = [];
  for (let i = 0; i < 10; i++) {
    memberData.push({
      name: `${i + 1}`,
      description: "courese",
      content: "descriptions",
    });
  }
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: "60px",
  }));

  const darkTheme = createTheme({ palette: { mode: "dark" } });
  const lightTheme = createTheme({ palette: { mode: "light" } });
  return (
    <>
      <div className={styles.container}>
        <Tabs tabPosition="left">
          <TabPane tab="교수" key="1">
            <List
              itemLayout="vertical"
              size="large"
              dataSource={professorData}
              renderItem={(item) => (
                <List.Item key={item.name}>
                  <Image
                    width={200}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                  <br />
                  <List.Item.Meta
                    title={item.name}
                    description={item.description}
                  />
                  {item.content}
                </List.Item>
              )}
            />
          </TabPane>
          <TabPane tab="구성원" key="2"></TabPane>
          <TabPane tab="졸업생" key="3">
            Content of Tab 3
          </TabPane>
        </Tabs>
      </div>
    </>
  );
}

export default Members;
