import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useHistory } from "react-router";
import "antd/dist/antd.css";
import { Card, Row, Col, Tag, Image } from "antd";
import styles from "./MainPage.module.css";
import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";

function MainPage() {
  const history = useHistory();
  const [colSize, setColSize] = useState();
  const [cardWidth, setCardWidth] = useState();
  const { t, i18n } = useTranslation();
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  const movePage = (path) => {
    history.push(path);
  };

  const read_more_cards = [
    {
      title: "RESEARCH AREA",
      description: t("research-header"),
      photo: "https://i.postimg.cc/nrVvvKjB/lab.png",
      path: "/research/researchArea",
    },
    {
      title: "PROFESSOR",
      description: t("professor-header"),
      photo: "https://i.postimg.cc/nrVvvKjB/lab.png",
      path: "/professor",
    },
    {
      title: "PROJECTS",
      description: t("projects-header"),
      photo: "https://i.postimg.cc/nrVvvKjB/lab.png",
      path: "/projects",
    },
  ];

  const renderSwitch = (param) => {
    switch (param) {
      case "RESEARCH AREA":
        return (
          <>
            <Tag color="#0879C4">#Computer Vision</Tag>
            <Tag color="#08B3CF">#Intelligent System</Tag>
          </>
        );
      case "PROFESSOR":
        break;
      case "PROJECTS":
        return (
          <>
            <Tag color="#01B7A0">#Intelligent CCTV</Tag>
            <Tag color="#08C441">#Mobile Robot</Tag>
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
      content: t("support-box-1"),
    },
    {
      color: "#120F40",
      src: "https://i.postimg.cc/WbnVjzFd/search.png",
      content: t("support-box-2"),
    },
    {
      color: "#0B0A29",
      src: "https://i.postimg.cc/c4ZWVwHq/coding.png",
      content: t("support-box-3"),
    },
  ];

  useEffect(() => {
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
        <Fade top distance="30px">
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
        <Fade top distance="30px">
          <div>
            <div className={styles.support_card_title}>
              <div>{t("support-1")}</div>
              <div>{t("support-2")}</div>
              <div>{t("support-3")}</div>
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
