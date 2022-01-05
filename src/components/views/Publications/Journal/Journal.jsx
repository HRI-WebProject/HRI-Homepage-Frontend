import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "@journal/Journal.module.css";
import TitleBar from "@titlebar/TitleBar";
import Sider from "@sider/Sider";
import TopMenu from "@topmenu/TopMenu";
import { Paper, Typography } from "@mui/material";
import { List, Tabs, Divider, Menu } from "antd";
import { journalData } from "@journal/sections/PublicationsData";

function Journal() {
  const [journalList, setJournalList] = useState();
  const [listLen, setListLen] = useState();

  useEffect(() => {
    axios
      .get("/publications/JOURNAL")
      .then((res) => {
        if (res.status === 200) {
          setJournalList(res.data.data);
          setListLen(res.data.data.length);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <TitleBar title="학술지" />
      <TopMenu selected_key="Publications" />
      <Paper className={styles.paper}>
        {/* for year dataset */}
        {journalList && (
          <List
            style={{ marginTop: "20px" }}
            bordered
            dataSource={journalList}
            renderItem={(item, idx) => (
              <List.Item key={idx}>
                <font style={{ color: "#2f5597" }}>[{listLen - idx}]</font>{" "}
                {item.topic}
                {item.link !== null && <div>{item.link}</div>}
              </List.Item>
            )}
          />
        )}
      </Paper>
    </div>
  );
}

export default Journal;
