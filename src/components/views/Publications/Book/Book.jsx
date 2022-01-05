import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "@conference/Conference.module.css";
import TitleBar from "@titlebar/TitleBar";
import TopMenu from "@topmenu/TopMenu";
import { List, Tabs, Divider, Row, Col } from "antd";
import { Paper, Typography } from "@mui/material";
import { bookData } from "./bookData";

function Book() {
  const [bookList, setBookList] = useState(bookData);
  const [listLen, setListLen] = useState();

  useEffect(() => {
    setListLen(bookData.length);
    axios
      .get("/publications/BOOK")
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data.data);
          setBookList(res.data.data);
          setListLen(res.data.data.length);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <TitleBar title="도서" />
      <TopMenu selected_key="Publications" />
      <Paper className={styles.paper}>
        {bookList && (
          <List
            bordered
            dataSource={bookList}
            renderItem={(item, idx) => (
              <List.Item key={idx}>
                <span className={styles.index}>{listLen - idx}</span>
                <span className={styles.contents}>
                  <div style={{ fontSize: "1.1em", fontWeight: "600" }}>
                    {item.topic}
                  </div>
                  <div>
                    {item.detail !== "" && (
                      <div>
                        {item.detail.split("\n").map((line, idx) => (
                          <span key={idx}>
                            {line}
                            <br />
                          </span>
                        ))}
                      </div>
                    )}
                    {item.link != "" && (
                      <div style={{ color: "#808080" }}>
                        <a href={item.link} className={styles.link}>
                          {item.link}
                        </a>
                      </div>
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

export default Book;
