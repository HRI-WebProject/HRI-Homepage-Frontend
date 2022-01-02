import React, { useState, useEffect } from "react";
import styles from "@activity/Activity.module.css";
import TitleBar from "@titlebar/TitleBar";
import TopMenu from "@topmenu/TopMenu";
import ActivityList from "@/components/views/Board/Activity/sections/ActivityList";

function Activity() {
  return (
    <div className={styles.container}>
      <TitleBar title="활동" />
      <TopMenu selected_key="Board" />
      <ActivityList />
    </div>
  );
}

export default Activity;
