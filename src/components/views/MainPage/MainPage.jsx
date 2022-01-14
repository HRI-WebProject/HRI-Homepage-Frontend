import React from "react";
import { useMediaQuery } from "react-responsive";
import { useHistory } from "react-router";
import "antd/dist/antd.css";
import { Card, Row, Col, Tag, Image } from "antd";
import styles from "@mainpage/MainPage.module.css";

function MainPage() {
  const history = useHistory();
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1100px)",
  });

  const gridStyle = {
    width: "(100/3)%",
    textAlign: "center",
  };

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
      description: "연구실 소속 교수님들 소개입니다.",
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

  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <img src="/assets/main/main1.png" />
      </div>
      <div className={styles.inner}>
        <div className={styles.section_title}>About Lab .</div>
        <div className={styles.read_more_cards}>
          <Row gutter={[32, 32]}>
            {read_more_cards.map((item, idx) => (
              <Col span={8}>
                <Card
                  key={idx}
                  hoverable
                  onClick={() => movePage(item.path)}
                  style={{ width: 380 }}
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
                    <div className={styles.tag}>{renderSwitch(item.title)}</div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <div className={styles.section_title}>Support</div>
        <div>
          <div className={styles.support_card_title}>
            <div>저희 연구실에서는 다음과 같은 지원이 가능합니다. </div>
            <div>
              등록금과 생활비 지원이 가능하며, 연구실에 배치된 다양한 연구
              기자재를 사용하며 본인의 연구를 진행할 수 있습니다. 또한 국내외
              다양한 학술 대회 참가를 적극 지원합니다.
            </div>
          </div>
          <div className={styles.support_card}>
            <Card>
              <Card.Grid
                hoverable={false}
                style={gridStyle}
                style={{ backgroundColor: "#231F6A" }}
                className={styles.support_card_grid}
              >
                <Image
                  preview={false}
                  width={120}
                  src="https://i.postimg.cc/gJ9F4Whq/customer-question-1.png"
                  className={styles.support_card_icon}
                />
                <br />
                <font className={styles.support_card_content}>
                  등록금/생활비 (전액/일부) 지원
                </font>
              </Card.Grid>
              <Card.Grid
                hoverable={false}
                style={gridStyle}
                style={{ backgroundColor: "#120F40" }}
                className={styles.support_card_grid}
              >
                <Image
                  preview={false}
                  width={120}
                  src="https://i.postimg.cc/WbnVjzFd/search.png"
                  className={styles.support_card_icon}
                />
                <br />
                <font className={styles.support_card_content}>
                  각종 연구 기자재 / 연구실 전용 공간 지원
                </font>
              </Card.Grid>
              <Card.Grid
                hoverable={false}
                style={gridStyle}
                style={{ backgroundColor: "#0B0A29" }}
                className={styles.support_card_grid}
              >
                <Image
                  width={120}
                  preview={false}
                  src="https://i.postimg.cc/c4ZWVwHq/coding.png"
                  className={styles.support_card_icon}
                />
                <br />
                <font className={styles.support_card_content}>
                  국내외 다양한 학술대회 참가 지원
                </font>
              </Card.Grid>
            </Card>
            <Card hoverable onClick={() => movePage("/contact")}>
              <div className={styles.contact_card}> Contact Us →</div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
