import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "@researcharea/ResearchArea.module.css";
import { Paper } from "@mui/material";
import TitleBar from "@titlebar/TitleBar";
import TopMenu from "@topmenu/TopMenu";
import { Row, Col, Card } from "antd";

function Equipments() {
  const { Meta } = Card;

  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1100px)",
  });

  const equipmentList = [
    {
      name: "Mavic Mini",
      photo: "/assets/equipment/equipment1.png",
    },
    {
      name: "Robomaster S1",
      photo: "/assets/equipment/equipment2.jpg",
    },
    {
      name: "Vive Pro Eye",
      photo: "/assets/equipment/equipment3.png",
    },
    {
      name: "Pioneer 3dx",
      photo: "/assets/equipment/equipment4.jpg",
    },
  ];

  return (
    <div className={styles.container}>
      <TitleBar title="연구실 장비" />
      <TopMenu selected_key="ResearchArea" />
      <Paper className={styles.paper}>
        <Row gutter={[16, 16]}>
          {equipmentList &&
            equipmentList.map((item, idx) => (
              <Col span={6}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src={item.photo} />}
                >
                  <Meta title={item.name} />
                </Card>
              </Col>
            ))}
        </Row>
      </Paper>
    </div>
  );
}

export default Equipments;
