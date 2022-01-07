import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import styles from "@notice/Notice.module.css";
import { Paper } from "@mui/material";
import { Pagination, Table } from "antd";

function BoardList(props, { boardType }) {
  const history = useHistory();
  const [rowList, setRowList] = useState();
  const [rowLength, setRowLength] = useState();
  const [paginationId, setPaginationId] = useState();

  const onPageChange = (page, pageSize) => {
    console.log(page);
  };

  const movePage = (idx) => {
    let id = idx + "";
    history.push({
      pathname: `/board/notice/${id}`,
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
  const data = [
    {
      id: 12,
      topic: "article12 topic activity",
      createDate: "2021-12-02T17:11:44.838695",
      author: "administrator",
    },
    {
      id: 11,
      topic: "article11 topic activity",
      createDate: "2021-12-02T17:11:44.830419",
      author: "administrator",
    },
    {
      id: 10,
      topic: "article10 topic activity",
      createDate: "2021-12-02T17:11:44.82142",
      author: "administrator",
    },
    {
      id: 9,
      topic: "article9 topic activity",
      createDate: "2021-12-02T17:11:44.813424",
      author: "administrator",
    },
    {
      id: 8,
      topic: "article8 topic activity",
      createDate: "2021-12-02T17:11:44.805424",
      author: "administrator",
    },
    {
      id: 7,
      topic: "article12 topic activity",
      createDate: "2021-12-02T17:11:44.838695",
      author: "administrator",
    },
    {
      id: 6,
      topic: "article11 topic activity",
      createDate: "2021-12-02T17:11:44.830419",
      author: "administrator",
    },
    {
      id: 5,
      topic: "article10 topic activity",
      createDate: "2021-12-02T17:11:44.82142",
      author: "administrator",
    },
    {
      id: 4,
      topic: "article9 topic activity",
      createDate: "2021-12-02T17:11:44.813424",
      author: "administrator",
    },
    {
      id: 3,
      topic: "article8 topic activity",
      createDate: "2021-12-02T17:11:44.805424",
      author: "administrator",
    },
    {
      id: 2,
      topic: "article9 topic activity",
      createDate: "2021-12-02T17:11:44.813424",
      author: "administrator",
    },
    {
      id: 1,
      topic: "article8 topic activity",
      createDate: "2021-12-02T17:11:44.805424",
      author: "administrator",
    },
  ];

  useEffect(() => {
    // setPaginationId("1");
    let paginationId = "1";
    // axios
    //   .get(`/board/NOTICE/page/${paginationId}`)
    //   .then((res) => {
    //     if (res.status === 200) {
    //       console.log(res.data.data);
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }, []);

  return (
    <div className={styles.datagrid}>
      <Paper className={styles.paper}>
        <Table
          columns={columns}
          dataSource={data}
          rowClassName={styles.table_row}
          size="middle"
          pagination={{ position: ["none", "bottomRight"] }}
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                movePage(record.id);
              }, // click row
            };
          }}
        />
      </Paper>
    </div>
  );
}

export default BoardList;
