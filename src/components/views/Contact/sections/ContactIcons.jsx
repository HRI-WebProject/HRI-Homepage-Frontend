import React from "react";
import styles from "@contact/Contact.module.css";
import { MailTwoTone, PhoneTwoTone } from "@ant-design/icons";
import { Row, Col } from "antd";

function ContactIcons() {
  return (
    <div>
      <br />
      <div className={styles.title}>Contact Info</div>
      <div className={styles.row}>
        <Row>
          <MailTwoTone className={styles.emailIcon} />
          <font className={styles.font1}>Email:&nbsp;&nbsp;</font>
          <div>gpffps369@gmail.com</div>
        </Row>
        <Row>
          <PhoneTwoTone className={styles.phoneIcon} />
          <font className={styles.font1}>Phone:&nbsp;&nbsp;</font>
          <div>010-9636-5306</div>
        </Row>
      </div>
    </div>
  );
}

export default ContactIcons;
