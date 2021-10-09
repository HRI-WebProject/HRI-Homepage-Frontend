import React from "react";
import styles from "./Contact.module.css";
import MapContainer from "./sections/MapContainer";
import ContactForm from "./sections/ContactForm";
import ContactIcons from "./sections/ContactIcons";
import { Row, Col } from "antd";
import { Paper } from "@mui/material";

function Contact() {
  return (
    <div className={styles.container}>
      <Paper elevation={3}>
        <MapContainer />
        <Row>
          <Col span={12}>
            <ContactIcons />
          </Col>
          <Col span={12}>
            <ContactForm />
          </Col>
        </Row>
      </Paper>
    </div>
  );
}

export default Contact;
