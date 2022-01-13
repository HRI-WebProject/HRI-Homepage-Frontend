import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import styles from "@patent/Patent.module.css";
import TitleBar from "@titlebar/TitleBar";
import TopMenu from "@topmenu/TopMenu";
import { List, Tabs, Divider, Row, Col } from "antd";
import { Paper, Typography } from "@mui/material";
import AddButton from "@common/AddButton/AddButton";
import ButtonSet from "@common/ButtonSet/ButtonSet";

function Patent() {
  const account = useSelector((state) => state.user.loginSuccess);
  const [isLogged, setIsLogged] = useState(false);
  const [patentList, setPatentList] = useState();
  const [listLen, setListLen] = useState();

  useEffect(() => {
    if (account && account.status === "OK") setIsLogged(true);
    axios
      .get("/publications/PATENT")
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          setPatentList(res.data.data);
          setListLen(res.data.data.length);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className={styles.container}>
      <TitleBar title="특허" />
      <TopMenu selected_key="Publications" />
      <Paper className={styles.paper}>
        {isLogged && <AddButton value="특허" />}
        {patentList && (
          <List
            bordered
            dataSource={patentList}
            renderItem={(item, idx) => (
              <List.Item key={idx}>
                <span className={styles.index}>{listLen - idx}</span>
                <span className={styles.contents}>
                  <div style={{ fontSize: "1.1em", fontWeight: "600" }}>
                    {item.topic}
                  </div>
                  <div>
                    {item.inventor && (
                      <div>
                        <font style={{ fontWeight: "400" }}>발명자 | </font>
                        {item.inventor}
                      </div>
                    )}
                    {item.fillingNo && (
                      <>
                        <font style={{ fontWeight: "400" }}>출원번호 | </font>
                        {item.fillingNo}
                        <span style={{ paddingRight: "30px" }} />
                      </>
                    )}
                    {item.fillingDate && (
                      <>
                        <font style={{ fontWeight: "400" }}>출원일 | </font>
                        {item.fillingDate}
                        <span style={{ paddingRight: "30px" }} />
                      </>
                    )}
                    {item.grantedNo && (
                      <>
                        <font style={{ fontWeight: "400" }}>등록번호 | </font>
                        {item.grantedNo}
                        <span style={{ paddingRight: "30px" }} />
                      </>
                    )}
                    {item.grantedDate && (
                      <>
                        <font style={{ fontWeight: "400" }}>등록일 | </font>
                        {item.grantedDate}
                        <span style={{ paddingRight: "30px" }} />
                      </>
                    )}
                    {item.progress && (
                      <>
                        {item.progress}
                        <span style={{ paddingRight: "30px" }} />
                      </>
                    )}
                  </div>
                </span>
                <span className={styles.buttons}>
                  {isLogged && (
                    <ButtonSet
                      pageFeature="publications"
                      id={item.id}
                      value="특허"
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

export default Patent;
