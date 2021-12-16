import React, { useState, useEffect } from "react";
import styles from "@journal/Journal.module.css";
import TitleBar from "@titlebar/TitleBar";
import Sider from "@sider/Sider";
import { Paper, Typography } from "@mui/material";
import { List, Tabs, Divider } from "antd";
import { journalData } from "@/components/views/Journal/sections/PublicationsData";
import { Timeline, Radio } from "antd";

function Publications() {
  const [journalList, setJournalList] = useState();

  useEffect(() => {
    var cnt = journalData.length;
    journalData
      .sort((a, b) => b.year - a.year)
      .map((item, idx) => {
        item.index = cnt--;
      });
    var full_year = journalData.reduce(function (prev, current) {
      return prev.year > current.year ? prev : current;
    }).year;
    var arr = new Array(full_year - 2004 + 1);
    var index = 0;
    for (var i = full_year; i > 2003; i--) {
      arr[index++] = journalData.filter(function (item, idx) {
        if (item.year === i) return true;
      });
    }
    setJournalList(arr);
    console.log(arr);
  }, []);

  return (
    <div className={styles.container}>
      <TitleBar title="학술지" />
      <div className={styles.ls}>
        <Sider selected_key="Publications" />
      </div>
      <div className={styles.rs}>
        <Paper className={styles.paper}>
          {journalList &&
            journalList.map((yearset, idx1) => (
              <>
                {yearset[0] && (
                  <>
                    <Divider orientation="left">{yearset[0].year}</Divider>
                    <List
                      bordered
                      dataSource={yearset}
                      renderItem={(item, idx) => (
                        <List.Item>
                          <font style={{ color: "#2f5597" }}>
                            <b>[{item.index}]</b>
                          </font>{" "}
                          {item.detail}
                        </List.Item>
                      )}
                    />
                  </>
                )}
              </>
            ))}
        </Paper>
      </div>
    </div>
  );
}

export default Publications;
