import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import styles from "../../Notice/Notice.module.css";
import { Paper } from "@mui/material";
import { Table } from "antd";
import AddButton from "../../../../common/AddButton/AddButton";
import { useTranslation } from "react-i18next";

function ActivityList() {
  const { t, i18n } = useTranslation();
  const history = useHistory();
  const account = useSelector((state) => state.user.loginSuccess);
  const [isLogged, setIsLogged] = useState(false);
  const [activityList, setActivityList] = useState();

  const movePage = (item) => {
    let id = item.id + "";
    history.push({
      pathname: `/board/activity/${id}`,
      state: { id: id, prev: item.prev, next: item.next },
    });
  };

  const convertToStringDate = (param) => {
    let result = param.substr(0, 10);
    return result;
  };

  const columns = [
    {
      title: t("board-table-num"),
      dataIndex: "index",
      align: "center",
      width: "6%",
    },
    {
      title: t("board-table-title"),
      dataIndex: "topic",
      width: "40%",
    },
    {
      title: t("board-table-author"),
      dataIndex: "author",
      align: "center",
      width: "10%",
    },
    {
      title: t("board-table-date"),
      dataIndex: "createDate",
      align: "center",
      width: "10%",
    },
  ];

  useEffect(() => {
    if (account && account.status === "OK") setIsLogged(true);
    axios
      .get(`/board/type/ACTIVITY`)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data.data);
          let totalElements = res.data.data.length;
          let tmp = res.data.data;
          tmp.map((item, index) => {
            item.index = totalElements - index;
            item.createDate = convertToStringDate(item.createDate);
          });
          tmp && setActivityList(tmp);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.datagrid}>
      <Paper elevation={0} square className={styles.paper}>
        {isLogged && <AddButton />}
        {activityList && (
          <Table
            columns={columns}
            dataSource={activityList}
            rowClassName={styles.table_row}
            size="middle"
            pagination={{
              // onChange: (page, pageSize) =>
              //   console.log("Pagination => onChange: ", page, pageSize),
              position: ["none", "bottomRight"],
            }}
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => {
                  movePage(record);
                }, // click row
              };
            }}
          />
        )}
      </Paper>
    </div>
  );
}

export default ActivityList;
