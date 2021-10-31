import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { Paper } from "@mui/material";
import styles from "@projects/Projects.module.css";
import Typography from "@mui/material/Typography";

function OngoingProject({ item }) {
  useEffect(() => {
    console.log(item);
  }, []);
  return (
    <Paper elevation={1} className={styles.paper}>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <div className={styles.ls}>
            <Typography variant="h5" className={styles.title}>
              <b>{item.title}</b>
            </Typography>
            <hr style={{ color: "#2f5597", height: 3 }} />
            <div className={styles.text1}>{item.text1}</div>
            <div className={styles.text2}>[{item.text2}]</div>
            <div className={styles.contents}>
              <ul>
                {item.contents.map((li, idx) => (
                  <li key={idx}>{li}</li>
                ))}
              </ul>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div className={styles.rs}>
            <img className={styles.project_img} src={item.src} />
          </div>
        </Col>
      </Row>
    </Paper>
  );
}

export default OngoingProject;
