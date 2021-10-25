import React from "react";
import { Carousel, Image } from "antd";
import "antd/dist/antd.css";
import styles from "./MainPage.module.css";

function MainPage() {
  const mainpage_list = [
    "/images/main/main1.png",
    "/images/main/main2.png",
    "/images/main/main3.png",
  ];
  return (
    <>
      <div className={styles.carousel}>
        <Carousel autoplay>
          {mainpage_list.map((item, i) => (
            <div>
              <img src={mainpage_list[i]} />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default MainPage;
