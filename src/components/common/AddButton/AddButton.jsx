import React from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import styles from "@common/AddButton/AddButton.module.css";
import { useHistory } from "react-router";

function AddButton({ value }) {
  const history = useHistory();
  const moveToWritePage = () => {
    if (window.location.pathname === "/alumni") {
      history.push("/members/write");
    } else if (window.location.pathname.substr(1, 12) === "publications") {
      history.push({
        pathname: "/publications/write",
        state: { value: value },
      });
    } else {
      history.push(window.location.pathname + "/write");
    }
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
