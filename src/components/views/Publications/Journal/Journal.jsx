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

  useEffect(() => {
    // axios.get("/publications/JOURNAL").then((res) => {
    //   if (res.status === 200) {
    //     console.log(res.data.data);
    //     setJournalList(res.data.data);
    //   } else {
    //     alert("Failed");
    //   }
    // });
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
  }, []);

  return (
    <div className={styles.container}>
      <TitleBar title="학술지" />
      <TopMenu selected_key="Publications" />
      <Paper className={styles.paper}>
        {/* for year dataset */}
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
                      <List.Item key={idx}>
                        <font style={{ color: "#2f5597" }}>
                          <b>[{idx}]</b>
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
  );
}

export default Journal;
