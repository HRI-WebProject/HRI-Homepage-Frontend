import React from "react";
import { Carousel, BackTop } from "antd";
import "antd/dist/antd.css";
import styles from "./MainPage.module.css";

function MainPage() {
  const contentStyle = {
    height: "800px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <>
      <div className={styles.carousel}>
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default MainPage;
