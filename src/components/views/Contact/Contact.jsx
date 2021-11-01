import React from "react";
import styles from "@contact/Contact.module.css";
import MapContainer from "@contact/sections/MapContainer";
import ContactForm from "@contact/sections/ContactForm";
import ContactIcons from "@contact/sections/ContactIcons";
import { Row, Col } from "antd";
import { Paper, Divider, Typography } from "@mui/material";

function Contact() {
  return (
    <div className={styles.container}>
      <Typography variant="h5">
        <b>Contact Us</b>
      </Typography>
      <Paper elevation={3} className={styles.paper}>
        <Row>
          <Col span={10}>
            <MapContainer />
          </Col>
          <Col span={14} className={styles.col2}>
            <div className={styles.namebox}>
              <font className={styles.part}>Professor</font>
              <font className={styles.name}>
                &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;정진우
              </font>
            </div>
            <br />
            <div className={styles.content}>
              <font>
                jwjung@dongguk.edu
                <br />
                02-2260-3812
              </font>
            </div>
            <Divider className={styles.divider} />
            <div className={styles.namebox}>
              <font className={styles.part}>Lab Manager</font>
              <font className={styles.name}>
                &ensp;&ensp;&ensp;&ensp;강태원
              </font>
            </div>
            <br />
            <div className={styles.content}>
              <font>
                ktw3388@dongguk.edu
                <br />
                02-2290-1426
              </font>
            </div>
            <Divider className={styles.divider} />
            <div className={styles.namebox}>
              <font className={styles.part}>Office</font>
            </div>
            <br />
            <font>http://hri.dongguk.edu</font>
            <div className={styles.content}>
              <font>
                신공학관 5125호 인간로봇상호작용연구실
                <br />
                02-2290-1426
              </font>
            </div>
          </Col>
        </Row>
      </Paper>
    </div>
  );
}

export default Contact;
