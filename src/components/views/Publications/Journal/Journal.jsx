import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import styles from "@journal/Journal.module.css";
import TitleBar from "@titlebar/TitleBar";
import TopMenu from "@topmenu/TopMenu";
import { Paper } from "@mui/material";
import { List } from "antd";
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
    <div>
      <TitleBar title="학술지" category="Publications" />
      <div className={styles.container}>
        <TopMenu selected_key="Publications" />
        <Paper elevation={0} square className={styles.paper}>
          {isLogged && <AddButton value="학술지" />}
          {journalList && (
            <List
              bordered
              dataSource={journalList}
              renderItem={(item, idx) => (
                <List.Item key={idx}>
                  <span className={styles.index}>{listLen - idx}</span>
                  <span className={styles.contents}>
                    <div style={{ fontSize: "1.1em" }}>{item.topic}</div>
                    <div>
                      {!!item.link && (
                        <div style={{ color: "#808080" }}>
                          <a href={item.link} className={styles.link}>
                            {item.link}
                          </a>
                        </div>
                      )}
                    </div>
                  </span>
                  {isLogged && (
                    <span className={styles.buttons}>
                      <ButtonSet
                        pageFeature="publications"
                        id={item.id}
                        value="도서"
                      />
                    </span>
                  )}
                </List.Item>
              )}
            />
          )}
        </Paper>
      </div>
    </div>
  );
}

export default Journal;
