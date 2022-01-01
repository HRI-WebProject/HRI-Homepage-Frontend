import React from "react";
import { useMediaQuery } from "react-responsive";
import styles from "@researcharea/ResearchArea.module.css";
import { Paper } from "@mui/material";
import TitleBar from "@titlebar/TitleBar";
import TopMenu from "@topmenu/TopMenu";
import { Row, Col, Card } from "antd";

function ResearchArea() {
  const { Meta } = Card;
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1100px)",
  });

  const sampleData = [
    {
      name: "RF/Microwave Antenna, Circuit, and System Analysis & Design",
      eng_name: "RF/Microwave Antenna, Circuit, and System Analysis & Design",
      photo: "path",
      detail: "Planar and 3D PCB antenna (array) & circuits",
    },
    {
      name: "Near- and Far-field Wireless Power Transfer (WPT) Technologies",
      eng_name:
        "Near- and Far-field Wireless Power Transfer (WPT) Technologies",
      photo: "path",
      detail:
        "Item-Level ID sensing, monitoring, & positiong using RFID/IoT sensors for smart manufacturing",
    },
    {
      name: "Electromagnetic Interference & Compatibility (EMI/EMC)",
      eng_name: "Electromagnetic Interference & Compatibility (EMI/EMC)",
      photo: "path",
      detail:
        "Electromagnetic interference (EMI) shielding, filtering, cabling, grounding for EMC",
    },
    {
      name: "Electromagnetic Interference & Compatibility (EMI/EMC)",
      eng_name: "Applied RF/Microwave Engineering",
      photo: "path",
      detail:
        "Passive and Active Frequency selective surface (FSS) using artificial transmission lines",
    },
  ];

  return (
    <div className={styles.container}>
      <TitleBar title="연구 분야" />
      <TopMenu selected_key="ResearchArea" />
      <Paper className={styles.paper}>
        <div>
          <div className={styles.research_topic_title}>
            HRI Lab Research Topics
          </div>
          <div>
            <Row gutter={[16, 16]}>
              {sampleData &&
                sampleData.map((item, idx) => (
                  <Col span={12}>
                    <Card
                      hoverable
                      style={{ height: 400 }}
                      cover={
                        <img
                          alt="example"
                          style={{ height: "300px" }}
                          src="/assets/reserach/black-background.jpeg"
                        />
                      }
                    >
                      <Meta title={item.name} description={item.eng_name} />
                    </Card>
                  </Col>
                ))}
            </Row>
          </div>
        </div>
        <div style={{ paddingTop: "30px" }}>
          {sampleData &&
            sampleData.map((item, idx) => (
              <div className={styles.item}>
                <div>
                  <div className={styles.circle}>{idx + 1}</div>
                  <div className={styles.item_name}>{item.name}</div>
                </div>
                <div className={styles.item_detail}>{item.detail}</div>
              </div>
            ))}
        </div>
      </Paper>
    </div>
  );
}

export default ResearchArea;
