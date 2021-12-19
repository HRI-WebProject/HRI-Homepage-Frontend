import * as React from "react";
import { useHistory } from "react-router";
import styles from "@board/Board.module.css";
import { Table } from "reactstrap";
import { Paper } from "@mui/material";
import { Pagination } from "antd";

function BoardList({ boardType }) {
  const history = useHistory();
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "topic", headerName: "Topic", width: 500 },
    { field: "author", headerName: "Author", width: 180 },
    { field: "create_date", headerName: "Date", width: 180 },
  ];

  const rows = [
    {
      id: 1,
      topic: "Snow",
      author: "Jon",
      create_date: "2021/11/10",
      boardType: "notice",
    },
    {
      id: 2,
      topic: "Snow",
      author: "Jon",
      create_date: "2021/11/10",
      boardType: "notice",
    },
    {
      id: 3,
      topic: "Snow",
      author: "Jon",
      create_date: "2021/11/10",
      boardType: "notice",
    },
    {
      id: 4,
      topic: "Snow",
      author: "Jon",
      create_date: "2021/11/10",
      boardType: "notice",
    },
    {
      id: 5,
      topic: "Snow",
      author: "Jon",
      create_date: "2021/11/10",
      boardType: "notice",
    },
    {
      id: 6,
      topic: "Snow",
      author: "Jon",
      create_date: "2021/11/10",
      boardType: "notice",
    },
    {
      id: 7,
      topic: "Snow",
      author: "Jon",
      create_date: "2021/11/10",
      boardType: "notice",
    },
    {
      id: 8,
      topic: "Snow",
      author: "Jon",
      create_date: "2021/11/10",
      boardType: "notice",
    },
    {
      id: 9,
      topic: "Snow",
      author: "Jon",
      create_date: "2021/11/10",
      boardType: "notice",
    },
    {
      id: 10,
      topic: "Snow",
      author: "Jon",
      create_date: "2021/11/10",
      boardType: "notice",
    },
    {
      id: 11,
      topic: "Snow",
      author: "Jon",
      create_date: "2021/11/10",
      boardType: "notice",
    },
    {
      id: 12,
      topic: "Snow",
      author: "Jon",
      create_date: "2021/11/10",
      boardType: "notice",
    },
  ];

  const moveDetailPage = (data) => {
    console.log(data);
    if (data.boardType === "notice") history.push(`/board/notice/${data.id}`);
  };

  return (
    <div className={styles.datagrid}>
      <Paper className={styles.paper}>
        <Table hover className={styles.table}>
          <thead>
            <tr className={styles.title_row}>
              <th style={{ width: "100px", textAlign: "center" }}>번호</th>
              <th style={{ width: "500px", textAlign: "center" }}>제목</th>
              <th style={{ width: "150px", textAlign: "center" }}>작성자</th>
              <th style={{ width: "150px", textAlign: "center" }}>작성일</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((item, idx) => (
              <tr
                key={idx}
                onClick={() => moveDetailPage(item)}
                className={styles.table_row}
              >
                <td scope="row" style={{ textAlign: "center" }}>
                  {item.id}
                </td>
                <td style={{ textAlign: "left" }}>{item.topic}</td>
                <td style={{ textAlign: "center" }}>{item.author}</td>
                <td style={{ textAlign: "center" }}>{item.create_date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Pagination defaultCurrent={1} total={rows.length} />
      </Paper>
    </div>
  );
}

export default BoardList;
