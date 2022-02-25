import React from "react";
import styles from "./NotFound.module.css";
import { useHistory } from "react-router-dom";
import { Button } from "antd";
import { useTranslation } from "react-i18next";

function NotFound() {
  const { t, i18n } = useTranslation();
  const history = useHistory();
  const moveBack = () => {
    history.push("/");
  };
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.number_text}>404</div>
        <div className={styles.eng_text}>{t("not-found-message")}</div>
        <div className={styles.but}>
          <Button type="primary" onClick={moveBack} size="large">
            Back To Home
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
