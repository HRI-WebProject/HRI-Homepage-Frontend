import React from "react";
import styles from "@activity/Activity.module.css";
import TitleBar from "@titlebar/TitleBar";
import TopMenu from "@topmenu/TopMenu";
import ActivityList from "@/components/views/Board/Activity/sections/ActivityList";

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
