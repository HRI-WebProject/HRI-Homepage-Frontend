import React from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import styles from "@common/AddButton/AddButton.module.css";
import { useHistory } from "react-router";

function AddButton() {
  const history = useHistory();
  const moveToWritePage = () => {
    history.push(window.location.pathname + "/write");
  };
  return (
    <div className={styles.container}>
      <Button
        type="primary"
        shape="circle"
        icon={<PlusOutlined />}
        className={styles.addbutton}
        onClick={moveToWritePage}
      />
    </div>
  );
}

export default AddButton;
