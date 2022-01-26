import React from "react";
import styles from "./TitleBar.module.css";
import Header from "../Header/Header";
import { useTranslation } from "react-i18next";

function TitleBar({ title, category }) {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.titlebar}>
      <Header title={title} category={category} />
      <div className={styles.inner}>
        <div className={styles.title}>
          <b>{t(title)}</b>
        </div>
      </div>
    </div>
  );
}

export default TitleBar;
