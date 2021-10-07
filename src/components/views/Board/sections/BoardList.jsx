import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useHistory } from "react-router";
import styles from "../Board.module.css";

function BoardList({ boardType }) {
  const history = useHistory();
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "topic", headerName: "Topic", width: 500 },
    { field: "author", headerName: "Author", width: 180 },
    { field: "date", headerName: "Date", width: 180 },
  ];

  const rows = [
    { id: 1, topic: "Snow", author: "Jon", date: "2021/11/10" },
    { id: 2, topic: "Snow", author: "Jon", date: "2021/11/10" },
    { id: 3, topic: "Snow", author: "Jon", date: "2021/11/10" },
    { id: 4, topic: "Snow", author: "Jon", date: "2021/11/10" },
    { id: 5, topic: "Snow", author: "Jon", date: "2021/11/10" },
    { id: 6, topic: "Snow", author: "Jon", date: "2021/11/10" },
    { id: 7, topic: "Snow", author: "Jon", date: "2021/11/10" },
    { id: 8, topic: "Snow", author: "Jon", date: "2021/11/10" },
    { id: 9, topic: "Snow", author: "Jon", date: "2021/11/10" },
    { id: 10, topic: "Snow", author: "Jon", date: "2021/11/10" },
    { id: 11, topic: "Snow", author: "Jon", date: "2021/11/10" },
    { id: 12, topic: "Snow", author: "Jon", date: "2021/11/10" },
  ];

  const moveDetailPage = (data) => {
    if (boardType === "notice") history.push(`/board/notice/${data.row.id}`);
  };

  return (
    <div className={styles.datagrid}>
      <DataGrid
        rows={rows}
        onRowClick={moveDetailPage}
        columns={columns}
        rowHeight={35}
        pageSize={10}
        rowsPerPageOptions={[5]}
        className={styles.datagrid_item}
      />
    </div>
  );
}

export default BoardList;
