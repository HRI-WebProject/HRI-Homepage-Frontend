import React from "react";
import styles from "@researcharea/ResearchArea.module.css";
import { Paper } from "@mui/material";
import { Row, Col } from "antd";

function Equipment() {
  return (
    <div>
      <Paper elevation={1} className={styles.paper_upper}>
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <img
              className={styles.equipment_img}
              src="/assets/equipment/equipment1.png"
            />
          </Col>
          <Col span={6}>
            <img
              className={styles.equipment_img}
              src="/assets/equipment/equipment2.png"
            />
          </Col>
          <Col span={6}>
            <img
              className={styles.equipment_img}
              src="/assets/equipment/equipment3.png"
            />
          </Col>
          <Col span={6}>
            <img
              className={styles.equipment_img}
              src="/assets/equipment/equipment4.png"
            />
          </Col>
        </Row>
      </Paper>
    </div>
  );
}

export default Equipment;
