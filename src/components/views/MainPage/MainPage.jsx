import React from "react";
import { useMediaQuery } from "react-responsive";
import "antd/dist/antd.css";
import styles from "@mainpage/MainPage.module.css";

function MainPage() {
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1100px)",
  });
  const mainpage_list = [
    "/assets/main/main1.png",
    "/assets/main/main2.png",
    "/assets/main/main3.png",
  ];
  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <img src="/assets/main/main1.png" />
      </div>
    </div>
  );
}

export default MainPage;
