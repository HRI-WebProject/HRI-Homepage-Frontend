import React from "react";
import { useHistory } from "react-router-dom";
import styles from "@footer/Footer.module.css";
import { PlusOutlined } from "@ant-design/icons";
import { Row, Col, Tag, Menu, Dropdown } from "antd";

function BottomFooter() {
  const history = useHistory();
  const movePage = (url) => {
    history.push(url);
  };
  const menu = (
    <Menu>
      <Menu.Item className={styles.menuItem}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.dongguk.ac.kr
          "
        >
          동국대학교
        </a>
      </Menu.Item>
      <Menu.Item className={styles.menuItem}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://engineer.dongguk.edu/
          "
        >
          동국대학교 공과대학
        </a>
      </Menu.Item>
      <Menu.Item className={styles.menuItem}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://cse.dongguk.edu/
          "
        >
          동국대학교 컴퓨터공학전공
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className={styles.footer}>
      <div className={styles.quick_menu}>
        <Tag color="default" style={{ marginRight: "50px" }}>
          Quick menu
        </Tag>
        <span
          className={styles.menu}
          onClick={() => movePage("/research/researchArea")}
        >
          Research Area
        </span>
        <span className={styles.verticlebar}>|</span>
        <span className={styles.menu} onClick={() => movePage("/professor")}>
          Professor
        </span>
        <span className={styles.verticlebar}>|</span>
        <span className={styles.menu} onClick={() => movePage("/members")}>
          Members
        </span>
        <span className={styles.verticlebar}>|</span>
        <span
          className={styles.menu}
          onClick={() => movePage("/publications/journal")}
        >
          Publications
        </span>
        <span className={styles.verticlebar}>|</span>
        <span className={styles.menu} onClick={() => movePage("/projects")}>
          Projects
        </span>
        <span className={styles.verticlebar}>|</span>
        <span className={styles.menu} onClick={() => movePage("/board/notice")}>
          Board
        </span>
        <span className={styles.verticlebar}>|</span>
        <span className={styles.menu} onClick={() => movePage("/contact")}>
          Contact
        </span>
      </div>
      <div>
        <Row>
          <Col span={4} style={{ textAlign: "center" }}>
            <img src="/assets/logo.png" className={styles.logo} />
          </Col>
          <Col span={14}>
            <div className={styles.content}>
              동국대학교 공과대학 <span className={styles.verticlebar}>|</span>
              04620 서울 중구 필동로1길 30 신공학관 5125호
              인간로봇상호작용연구실
            </div>
            <div className={styles.content}>
              TEL) 02-2290-1426
              <span className={styles.verticlebar}>|</span>
              Prof. Email) jwjung@dongguk.edu
            </div>
            <div className={styles.copyright}>
              © Copyright 2021 · Human Robot Interection LAB, Dongguk University
              All Right Reserved
            </div>
          </Col>
          <Col span={6}>
            <Dropdown overlay={menu} placement="topCenter">
              <div className={styles.bottom_box}>
                관련기관
                <PlusOutlined className={styles.plusIcon} />
              </div>
            </Dropdown>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default BottomFooter;
