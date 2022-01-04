import React, { useState, useEffect } from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import styles from "@researcharea/ResearchArea.module.css";
import { Paper } from "@mui/material";
import TitleBar from "@titlebar/TitleBar";
import TopMenu from "@topmenu/TopMenu";
import { Row, Col, Card } from "antd";

function Equipments() {
  const { Meta } = Card;
  const [equipments, setEquipments] = useState();

  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1100px)",
  });

  // sample data
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

  useEffect(() => {
    axios
      .get("/researchEquipment")
      .then((res) => {
        if (res.status === 200) {
          setEquipments(res.data.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <TitleBar title="연구실 장비" />
      <TopMenu selected_key="ResearchArea" />
      <Paper className={styles.paper}>
        <Row gutter={[16, 16]}>
          {equipments &&
            equipments.map((item, idx) => (
              <Col span={6}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src={item.photo} />}
                >
                  <Meta title={item.name} description={item.engName} />
                </Card>
              </Col>
            ))}
        </Row>
      </Paper>
    </div>
  );
}

export default Equipments;
