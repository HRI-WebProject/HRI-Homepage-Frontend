import React, { useState, useEffect } from "react";
import styles from "@publications/Publications.module.css";
import TitleBar from "@titlebar/TitleBar";
import { Paper, Typography } from "@mui/material";
import { List, Tabs, Divider } from "antd";
import { paperData } from "@publications/sections/PublicationsData";
import { Timeline, Radio } from "antd";

function Publications() {
  const { TabPane } = Tabs;
  const [journalList, setJournalList] = useState(paperData);

  return (
    <div className={styles.container}>
      <Tabs tabPosition="left">
        <TabPane tab="Journal" key="1">
          <Typography variant="h5">
            <b>Journal</b>
          </Typography>
          <Divider orientation="left">{2021}</Divider>
          <Paper className={styles.paper}>
            <List
              bordered
              dataSource={journalList}
              renderItem={(item, idx) => (
                <List.Item>
                  <font style={{ color: "#2f5597" }}>
                    <b>[{idx + 1}]</b>
                  </font>{" "}
                  {item.detail}
                </List.Item>
              )}
            />
          </Paper>
        </TabPane>
        <TabPane tab="Patent" key="2"></TabPane>
      </Tabs>
    </div>
  );
}

export default Publications;
