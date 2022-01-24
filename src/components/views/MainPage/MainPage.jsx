import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useHistory } from "react-router";
import "antd/dist/antd.css";
import { Card, Row, Col, Tag, Image } from "antd";
import styles from "./MainPage.module.css";
import Fade from "react-reveal/Fade";

function MainPage() {
  const history = useHistory();
  const [colSize, setColSize] = useState();
  const [cardWidth, setCardWidth] = useState();
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  const movePage = (path) => {
    history.push(path);
  };

  const read_more_cards = [
    {
      title: "RESEARCH AREA",
      description:
        "연구 분야와 연구실에서 활용할 수 있는 대표 장비들에 대해 소개합니다.",
      photo: "https://i.postimg.cc/nrVvvKjB/lab.png",
      path: "/research/researchArea",
    },
    {
      title: "PROFESSOR",
      description: "연구실 소속 교수님 소개입니다.",
      photo: "https://i.postimg.cc/nrVvvKjB/lab.png",
      path: "/professor",
    },
    {
      title: "PROJECTS",
      description: "현재 연구실에서 진행 중인 프로젝트에 대한 소개입니다.",
      photo: "https://i.postimg.cc/nrVvvKjB/lab.png",
      path: "/projects",
    },
  ];

  const renderSwitch = (param) => {
    switch (param) {
      case "RESEARCH AREA":
        return (
          <>
            <Tag color="#0879C4">#연구분야1</Tag>
            <Tag color="#08B3CF">#연구분야2</Tag>
          </>
        );
      case "PROFESSOR":
        break;
      case "PROJECTS":
        return (
          <>
            <Tag color="#01B7A0">#프로젝트1</Tag>
            <Tag color="#08C441">#프로젝트2</Tag>
          </>
        );
      default:
        break;
    }
  };

  const support_list = [
    {
      color: "#231F6A",
      src: "https://i.postimg.cc/gJ9F4Whq/customer-question-1.png",
      content: "등록금/생활비 (전액/일부) 지원",
    },
    {
      color: "#120F40",
      src: "https://i.postimg.cc/WbnVjzFd/search.png",
      content: "각종 연구 기자재 / 연구실 전용 공간 지원",
    },
    {
      color: "#0B0A29",
      src: "https://i.postimg.cc/c4ZWVwHq/coding.png",
      content: "국내외 다양한 학술대회 참가 지원",
    },
  ];

  useEffect(() => {
    console.log(isSmallScreen);
    if (isSmallScreen) {
      setColSize(24);
      setCardWidth("80vw");
    } else {
      setColSize(8);
      setCardWidth(380);
    }
  });

  return (
    <div className={styles.container}>
      <Fade right>
        <div className={styles.carousel}>
          <img src="/assets/main/main1.bmp" />
        </div>
      </Fade>
      <div className={styles.inner}>
        <div className={styles.section_title}>About Lab .</div>
        <Fade>
          <div className={styles.read_more_cards}>
            <Row gutter={[32, 32]}>
              {read_more_cards.map((item, idx) => (
                <Col span={8}>
                  <Card
                    key={idx}
                    hoverable
                    onClick={() => movePage(item.path)}
                    cover={
                      <img
                        alt="example"
                        src={item.photo}
                        style={{ height: "200px" }}
                        preview={false}
                      />
                    }
                  >
                    <div className={styles.card_meta}>
                      <div className={styles.card_title}>{item.title}</div>
                      <div className={styles.card_description}>
                        {item.description}
                      </div>
                      <div className={styles.tag}>
                        {renderSwitch(item.title)}
                      </div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Fade>
        <div className={styles.section_title}>Support</div>
        <Fade>
          <div>
            <div className={styles.support_card_title}>
              <div>저희 연구실에서는 다음과 같은 지원이 가능합니다. </div>
              <div>
                등록금과 생활비 지원이 가능하며, 연구실에 배치된 다양한 연구
                기자재를 사용하여 본인의 연구를 진행할 수 있습니다.
                <div>또한 국내외 다양한 학술 대회 참가를 적극 지원합니다.</div>
              </div>
            </div>
            <div className={styles.support_card}>
              <Card>
                {support_list.map((item, idx) => (
                  <Card.Grid
                    hoverable={false}
                    style={{ backgroundColor: item.color }}
                    className={styles.support_card_grid}
                  >
                    <Image
                      preview={false}
                      width={120}
                      src={item.src}
                      className={styles.support_card_icon}
                    />
                    <br />
                    <font className={styles.support_card_content}>
                      {item.content}
                    </font>
                  </Card.Grid>
                ))}
              </Card>
              <Card hoverable onClick={() => movePage("/contact")}>
                <div className={styles.contact_card}> Contact Us →</div>
              </Card>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default MainPage;
