import React from "react";
import styles from "./NotFound.module.css";
import { useHistory } from "react-router-dom";
import { Result, Button } from "antd";

function NotFound() {
  const history = useHistory();
  const moveBack = () => {
    history.push("/");
  };
  return (
    <div className={styles.container}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={moveBack} size="large">
            Back Home
          </Button>
        }
      />
    </div>
  );
}

export default NotFound;
