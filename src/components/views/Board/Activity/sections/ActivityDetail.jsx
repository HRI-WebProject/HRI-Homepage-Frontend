import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router";
import { useSelector } from "react-redux";
import styles from "../../Notice/Notice.module.css";
import { Paper } from "@mui/material";
import TitleBar from "../../../../common/TitleBar/TitleBar";
import TopMenu from "../../../../common/TopMenu/TopMenu";
import { List } from "antd";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ListIcon from "@material-ui/icons/List";
import ButtonSet from "../../../../common/ButtonSet/ButtonSet";
import { useTranslation } from "react-i18next";

function ActivityDetail() {
  const { t, i18n } = useTranslation();
  const history = useHistory();
  const location = useLocation();
  const account = useSelector((state) => state.user.loginSuccess);
  const [isLogged, setIsLogged] = useState(false);
  const [pageId, setPageId] = useState(location.state.id);
  const [boardDetail, setBoardDetail] = useState();
  const [data, setData] = useState();

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

  const convertToStringDate = (param) => {
    let result = param.substr(0, 10) + " " + param.substr(11, 5);
    return result;
  };

  useEffect(() => {
    if (account && account.status === "OK") setIsLogged(true);
    let tmp = [];
    pageId &&
      axios
        .get(`/board/${pageId}`)
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

    let data_tmp = [];

    axios
      .get(`/board/type/ACTIVITY`)
      .then((res) => {
        if (res.status === 200) {
          let totalElements = res.data.data.length;
          let tmp = res.data.data;
          let index = tmp.findIndex((item) => item.id === parseInt(pageId));
          if (index !== 0) {
            data_tmp.push({
              type: "prev",
              title: tmp[index - 1].topic,
              id: tmp[index - 1].id,
            });
          }
          if (index !== totalElements - 1) {
            data_tmp.push({
              type: "next",
              title: tmp[index + 1].topic,
              id: tmp[index + 1].id,
            });
          }
          data_tmp && setData(data_tmp);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [pageId]);

  return (
    <div>
      <TitleBar title="activity" category="Board" />
      <div className={styles.container}>
        <TopMenu selected_key="Board" />
        {boardDetail && (
          <Paper elevation={0} square className={styles.paper}>
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
                      <b>{t("board-table-author")}</b> | {boardDetail.author}
                    </span>
                    <span>
                      <b>{t("board-table-date")}</b> |{" "}
                      {convertToStringDate(boardDetail.createDate)}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className={styles.table_td_2}>
                    {boardDetail.content.split("\n").map((line, idx) => (
                      <span key={idx}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </td>
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
              {data && data.length !== 0 && (
                <List
                  bordered
                  dataSource={data}
                  renderItem={(item) =>
                    item.type === "prev" ? (
                      <List.Item
                        onClick={() => movePage(`/board/activity/`, item.id)}
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
                        onClick={() => movePage(`/board/activity/`, item.id)}
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
              )}
            </div>
          </Paper>
        )}
      </div>
    </div>
  );
}

export default ActivityDetail;
