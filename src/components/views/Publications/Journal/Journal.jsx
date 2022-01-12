import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import styles from "@journal/Journal.module.css";
import TitleBar from "@titlebar/TitleBar";
import Sider from "@sider/Sider";
import TopMenu from "@topmenu/TopMenu";
import { Paper, Typography } from "@mui/material";
import { List, Tabs, Divider, Menu } from "antd";
import AddButton from "@common/AddButton/AddButton";
import ButtonSet from "@common/ButtonSet/ButtonSet";

function Journal() {
  const account = useSelector((state) => state.user.loginSuccess);
  const [isLogged, setIsLogged] = useState(false);
  const [journalList, setJournalList] = useState();
  const [listLen, setListLen] = useState();

  useEffect(() => {
    if (account && account.status === "OK") setIsLogged(true);
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
        {isLogged && <AddButton value="학술지" />}
        {journalList && (
          <List
            style={{ marginTop: "20px" }}
            bordered
            dataSource={journalList}
            renderItem={(item, idx) => (
              <List.Item key={idx}>
                <span className={styles.contents}>
                  <font style={{ color: "#2f5597" }}>[{listLen - idx}]</font>{" "}
                  {item.topic}
                  {item.link !== null && <div>{item.link}</div>}
                </span>
                <span className={styles.buttons}>
                  {isLogged && (
                    <ButtonSet
                      pageFeature="publications"
                      id={item.id}
                      value="학술지"
                    />
                  )}
                </span>
              </List.Item>
            )}
          />
        )}
      </Paper>
    </div>
  );
}

export default Journal;
