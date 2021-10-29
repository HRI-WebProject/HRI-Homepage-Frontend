import React from "react";
import { Carousel, Image } from "antd";
import "antd/dist/antd.css";
import styles from "@mainpage/MainPage.module.css";

function MainPage() {
  const mainpage_list = [
    "/assets/main/main1.png",
    "/assets/main/main2.png",
    "/assets/main/main3.png",
  ];
  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <Carousel autoplay>
          {mainpage_list.map((item, idx) => (
            <div key={idx}>
              <img src={mainpage_list[idx]} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default MainPage;
