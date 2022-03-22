import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import styles from "./Conference.module.css";
import TitleBar from "../../../common/TitleBar/TitleBar";
import TopMenu from "../../../common/TopMenu/TopMenu";
import { List } from "antd";
import { Paper } from "@mui/material";
import AddButton from "../../../common/AddButton/AddButton";
import ButtonSet from "../../../common/ButtonSet/ButtonSet";

function Conference() {
  const account = useSelector((state) => state.user.loginSuccess);
  const [isLogged, setIsLogged] = useState(false);
  const [conferenceList, setConferenceList] = useState();
  const [listLen, setListLen] = useState();

  useEffect(() => {
    if (account && account.status === "OK") setIsLogged(true);
    axios
      .get("/api/publications/CONFERENCE")
      .then((res) => {
        if (res.status === 200) {
          setConferenceList(res.data.data);
          setListLen(res.data.data.length);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <TitleBar title="conference" category="Publications" />
      <div className={styles.container}>
        <TopMenu selected_key="Publications" />
        <Paper elevation={0} square className={styles.paper}>
          {isLogged && <AddButton value="학술대회" />}
          {conferenceList && (
            <List
              bordered
              dataSource={conferenceList}
              renderItem={(item, idx) => (
                <List.Item key={idx}>
                  <span className={styles.index}>{listLen - idx}</span>
                  <span className={styles.contents}>
                    <div style={{ fontSize: "1.1em", fontWeight: "600" }}>
                      {item.topic}
                    </div>
                    <div>
                      {item.detail && (
                        <div>
                          {item.detail.split("\n").map((line, idx) => (
                            <span key={idx}>
                              {line}
                              <br />
                            </span>
                          ))}
                        </div>
                      )}
                      {item.link && (
                        <div style={{ color: "#808080" }}>
                          <a href={item.link} className={styles.link}>
                            {item.link}
                          </a>
                        </div>
                      )}
                    </div>
                  </span>
                  <span className={styles.buttons}>
                    {isLogged && (
                      <ButtonSet
                        pageFeature="publications"
                        id={item.id}
                        value="학술대회"
                      />
                    )}
                  </span>
                </List.Item>
              )}
            />
          )}
        </Paper>
      </div>
    </div>
  );
}

export default Conference;
