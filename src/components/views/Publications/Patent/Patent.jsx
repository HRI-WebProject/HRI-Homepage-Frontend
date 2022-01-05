import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "@patent/Patent.module.css";
import TitleBar from "@titlebar/TitleBar";
import TopMenu from "@topmenu/TopMenu";
import { List, Tabs, Divider, Row, Col } from "antd";
import { Paper, Typography } from "@mui/material";
import { patentData } from "@/components/views/Publications/Patent/sections/PatentData";

function Patent() {
  const [patentList, setPatentList] = useState();
  const [listLen, setListLen] = useState();

  useEffect(() => {
    axios
      .get("/publications/PATENT")
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data.data);
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
                    {item.inventor !== "" && (
                      <div>
                        <font style={{ fontWeight: "400" }}>발명자 | </font>
                        {item.inventor}
                      </div>
                    )}
                    {item.filling_no != "" && (
                      <>
                        <font style={{ fontWeight: "400" }}>출원번호 | </font>
                        {item.filling_no}
                        <span style={{ paddingRight: "30px" }} />
                      </>
                    )}
                    {item.granted_no != "" && (
                      <>
                        <font style={{ fontWeight: "400" }}>등록번호 | </font>
                        {item.granted_no}
                        <span style={{ paddingRight: "30px" }} />
                      </>
                    )}
                    {item.filling_date != "" && (
                      <>
                        <font style={{ fontWeight: "400" }}>출원일 | </font>
                        {item.filling_date}
                        <span style={{ paddingRight: "30px" }} />
                      </>
                    )}
                    {item.progress != "" && (
                      <>
                        <font style={{ fontWeight: "400" }}>진행상황 | </font>
                        {item.progress}
                        <span style={{ paddingRight: "30px" }} />
                      </>
                    )}
                  </div>
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
