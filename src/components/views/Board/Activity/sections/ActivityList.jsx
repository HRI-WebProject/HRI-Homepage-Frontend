import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import styles from "@notice/Notice.module.css";
import { Paper } from "@mui/material";
import { Pagination, Table } from "antd";
import AddButton from "@common/AddButton/AddButton";

function ActivityList(props, { boardType }) {
  const history = useHistory();
  const account = useSelector((state) => state.user.loginSuccess);
  const [isLogged, setIsLogged] = useState(false);
  const [rowList, setRowList] = useState();
  const [rowLength, setRowLength] = useState();
  const [paginationId, setPaginationId] = useState();
  const [activityList, setActivityList] = useState();
  const [totalPages, setTotalPages] = useState();

  const onPageChange = (page, pageSize) => {
    console.log(page);
  };

  const movePage = (idx) => {
    let id = idx + "";
    history.push({
      pathname: `/board/activity/${id}`,
      state: { id: id },
    });
  };

  const columns = [
    {
      title: "번호",
      dataIndex: "id",
      align: "center",
      width: "5%",
    },
    {
      title: "제목",
      dataIndex: "topic",
      width: "40%",
    },
    {
      title: "작성자",
      dataIndex: "author",
      align: "center",
      width: "10%",
    },
    {
      title: "작성일",
      dataIndex: "createDate",
      align: "center",
      width: "15%",
    },
  ];

  useEffect(() => {
    if (account && account.status === "OK") setIsLogged(true);
    // setPaginationId("1");
    axios
      .get(`/board/ACTIVITY/page/0`)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data.data);
          setActivityList(res.data.data.content);
          setTotalPages(res.data.data.totalPages);
          setRowLength(res.data.data.content.length);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.datagrid}>
      <Paper className={styles.paper}>
        {isLogged && <AddButton />}
        {activityList && (
          <Table
            columns={columns}
            dataSource={activityList}
            rowClassName={styles.table_row}
            size="middle"
            pagination={{
              onChange: (page, pageSize) =>
                console.log("Pagination => onChange: ", page, pageSize),
              position: ["none", "bottomRight"],
            }}
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => {
                  // let index = rowLength - rowIndex + "";
                  movePage(record.id);
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
