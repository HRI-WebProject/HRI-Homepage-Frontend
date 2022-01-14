import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import styles from "@conference/Conference.module.css";
import TitleBar from "@titlebar/TitleBar";
import TopMenu from "@topmenu/TopMenu";
import { List } from "antd";
import { Paper } from "@mui/material";
import AddButton from "@common/AddButton/AddButton";
import ButtonSet from "@common/ButtonSet/ButtonSet";

function Book() {
  const account = useSelector((state) => state.user.loginSuccess);
  const [isLogged, setIsLogged] = useState(false);
  const [bookList, setBookList] = useState();
  const [listLen, setListLen] = useState();

  useEffect(() => {
    if (account && account.status === "OK") setIsLogged(true);
    axios
      .get("/publications/BOOK")
      .then((res) => {
        if (res.status === 200) {
          setBookList(res.data.data);
          setListLen(res.data.data.length);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <TitleBar title="도서" category="Publications" />
      <div className={styles.container}>
        <TopMenu selected_key="Publications" />
        <Paper elevation={0} square className={styles.paper}>
          {isLogged && <AddButton value="도서" />}
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
                      {!!item.detail && (
                        <div>
                          {item.detail.split("\n").map((line, idx) => (
                            <span key={idx}>
                              {line}
                              <br />
                            </span>
                          ))}
                        </div>
                      )}
                      {!!item.link && (
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
                        value="도서"
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

export default Book;
