import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router";
import { useSelector } from "react-redux";
import styles from "@notice/Notice.module.css";
import { Paper } from "@mui/material";
import TitleBar from "@titlebar/TitleBar";
import TopMenu from "@topmenu/TopMenu";
import { List, Typography, Divider } from "antd";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ListIcon from "@material-ui/icons/List";
import ButtonSet from "@common/ButtonSet/ButtonSet";

function ActivityDetail() {
  const history = useHistory();
  const location = useLocation();
  const account = useSelector((state) => state.user.loginSuccess);
  const [isLogged, setIsLogged] = useState(false);
  const [pageId, setPageId] = useState(location.state.id);
  const [boardDetail, setBoardDetail] = useState();

  const movePage = (url, id) => {
    if (!id) {
      history.push({
        pathname: `/board/activity`,
      });
    } else {
      id = id + "";
      history.push({
        pathname: url + id,
        state: { id: id },
      });
    }
    setPageId(id);
  };

  const data = [
    {
      type: "prev",
      title: "Ant Design Title 1",
    },
    {
      type: "next",
      title: "Ant Design Title 2",
    },
  ];

  useEffect(() => {
    if (account && account.status === "OK") setIsLogged(true);
    pageId &&
      axios
        .get(`/board/ACTIVITY/${pageId + ""}`)
        .then((res) => {
          if (res.status === 200) {
            setBoardDetail(res.data.data);
            // if (res.data.data[0] === undefined) {
            //   history.push("/board/activity");
            //   alert("글이 존재하지 않습니다.");
            // }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
  }, [pageId]);

  return (
    <div className={styles.container}>
      <TitleBar title="활동" />
      <TopMenu selected_key="Board" />
      {boardDetail && (
        <Paper className={styles.paper}>
          <div>
            {isLogged && <ButtonSet pageFeature="activity" id={pageId} />}
          </div>
          <table className={styles.table_}>
            <thead>
              <tr>
                <th className={styles.table_th}>{boardDetail.topic}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.table_td_1}>
                  <span style={{ paddingRight: "50px" }}>
                    <b>작성자</b> | {boardDetail.author}
                  </span>
                  <span>
                    <b>작성일</b> | {boardDetail.createDate}
                  </span>
                </td>
              </tr>
              <tr>
                <td className={styles.table_td_2}>{boardDetail.content}</td>
              </tr>
            </tbody>
          </table>
          <div
            className={styles.listIcon}
            onClick={() => movePage("/board/activity")}
          >
            <ListIcon />
          </div>
          <div className={styles.list}>
            <List
              bordered
              dataSource={data}
              renderItem={(item) =>
                item.type === "prev" ? (
                  <List.Item
                    onClick={() =>
                      movePage(`/board/activity/`, parseInt(pageId) + 1)
                    }
                    className={styles.list_item}
                  >
                    <span className={styles.prev_next_btn}>
                      <ArrowDropUpIcon />
                      prev
                    </span>
                    {item.title}
                  </List.Item>
                ) : (
                  <List.Item
                    onClick={() =>
                      movePage(`/board/activity/`, parseInt(pageId) - 1)
                    }
                    className={styles.list_item}
                  >
                    <span className={styles.prev_next_btn}>
                      <ArrowDropDownIcon />
                      next
                    </span>
                    {item.title}
                  </List.Item>
                )
              }
            />
          </div>
        </Paper>
      )}
    </div>
  );
}

export default ActivityDetail;
