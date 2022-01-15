import React from "react";
import styles from "@titlebar/TitleBar.module.css";
import Header from "@/components/common/Header/Header";

function TitleBar({ title, category }) {
  return (
    <div className={styles.titlebar}>
      <Header title={title} category={category} />
      <div className={styles.inner}>
        <div className={styles.title}>
          <b>{title}</b>
        </div>
      </div>
    </div>
  );
}

export default TitleBar;
