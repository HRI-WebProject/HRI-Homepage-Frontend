import React from "react";
import styles from "./Activity.module.css";
import TitleBar from "../../../common/TitleBar/TitleBar";
import TopMenu from "../../../common/TopMenu/TopMenu";
import ActivityList from "./sections/ActivityList";

function Activity() {
  return (
    <div>
      <TitleBar title="활동" category="Board" />
      <div className={styles.container}>
        <TopMenu selected_key="Board" />
        <ActivityList />
      </div>
    </div>
  );
}

export default Activity;
