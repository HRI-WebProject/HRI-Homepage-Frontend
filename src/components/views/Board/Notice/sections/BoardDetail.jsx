import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router";
import styles from "@notice/Notice.module.css";
import { Paper } from "@mui/material";
import TitleBar from "@titlebar/TitleBar";
import TopMenu from "@topmenu/TopMenu";
import { List, Typography, Divider } from "antd";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ListIcon from "@material-ui/icons/List";

function BoardDetail() {
  const history = useHistory();
  const location = useLocation();
  const [pageId, setPageId] = useState(location.state.id);
  const [boardDetail, setBoardDetail] = useState();

  const movePage = (url, id) => {
    if (!id) {
      history.push({
        pathname: `/board/notice/${id}`,
        state: { id: id },
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
    pageId &&
      axios
        .get(`/board/NOTICE/page/${pageId + ""}`)
        .then((res) => {
          if (res.status === 200) {
            // console.log(res.data.data[0]);
            setBoardDetail(res.data.data[0]);
            // if (res.data.data[0] === undefined) {
            //   history.push("/board/notice");
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
      <TitleBar title="소식" />
      <TopMenu selected_key="Board" />
      <Paper className={styles.paper}>
        <table className={styles.table_}>
          <thead>
            <tr>
              <th className={styles.table_th}>Topic</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.table_td_1}>
                <span style={{ paddingRight: "50px" }}>
                  <b>작성자</b> | author
                </span>
                <span>
                  <b>작성일</b> | 2022-01-01
                </span>
              </td>
            </tr>
            <tr>
              <td className={styles.table_td_2}>
                The paper entitled "Design of Miniaturized Incident
                Angle-Insensitive 2.45 GHz RF-Based Energy Harvesting System for
                IoT Applications"was accepted in IEEE Transactions on Antennas
                and Propagation. The authors are Jeong-Su Park, and Wang-Sang
                Lee.{" "}
              </td>
            </tr>
          </tbody>
        </table>
        <div
          className={styles.listIcon}
          onClick={() => movePage("/board/notice")}
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
                    movePage(`/board/notice/`, parseInt(pageId) + 1)
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
                    movePage(`/board/notice/`, parseInt(pageId) - 1)
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
    </div>
  );
}

export default BoardDetail;
