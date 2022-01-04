import React from "react";
import axios from "axios";
import { Button } from "antd";
import styles from "@common/ButtonSet/ButtonSet.module.css";
import { useHistory } from "react-router";

function ButtonSet({ pageFeature, id }) {
  const history = useHistory();
  const moveToEditPage = () => {
    let currentId = id + "";
    history.push({
      pathname: window.location.pathname + "/" + currentId + "/edit",
      state: { id: id },
    });
  };

  const deleteProcess = (param) => {
    let currentId = id + "";
    switch (param) {
      case "professor":
        axios
          .delete(`/admin/professors/${currentId}`)
          .then((res) => {
            if (res.status === 200) {
              alert("해당 내용이 삭제되었습니다.");
              window.location.reload();
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  };

  return (
    <div className={styles.container}>
      <Button className={styles.edit_button} onClick={moveToEditPage}>
        Edit
      </Button>
      <Button
        className={styles.delete_button}
        onClick={() => deleteProcess(pageFeature)}
      >
        Delete
      </Button>
    </div>
  );
}

export default ButtonSet;
