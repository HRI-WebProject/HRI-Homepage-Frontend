import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Footer.module.css";
import { PlusOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import { Row, Col, Tag, Menu, Dropdown } from "antd";
import { useTranslation } from "react-i18next";

function BottomFooter() {
  const history = useHistory();
  const { t, i18n } = useTranslation();
  const movePage = (url) => {
    history.push(url);
  };

  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1000px)",
  });

  const menu = (
    <Menu>
      <Menu.Item className={styles.menuItem} key={1}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.dongguk.ac.kr
          "
        >
          {t("footer-fs-1")}
        </a>
      </Menu.Item>
      <Menu.Item className={styles.menuItem} key={2}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://engineer.dongguk.edu/
          "
        >
          {t("footer-fs-2")}
        </a>
      </Menu.Item>
      <Menu.Item className={styles.menuItem} key={3}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://cse.dongguk.edu/
          "
        >
          {t("footer-fs-3")}
        </a>
      </Menu.Item>
    </Menu>
  );

  const quick_menu_list = [
    { title: "Research", path: "/research/researchArea" },
    { title: "Professor", path: "/professor" },
    { title: "Members", path: "/members" },
    { title: "Publications", path: "/publications/journal" },
    { title: "Projects", path: "/projects" },
    { title: "Board", path: "/board/notice" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <div className={styles.footer}>
      {isSmallScreen ? (
        <>
          <div className={styles.row}>
            <Row>
              <Col span={4} />
              <Col span={16} style={{ textAlign: "left" }}>
                <img src="/assets/logo/logo.png" className={styles.logo} />
              </Col>
              <Col span={4} />
              <Col span={4} />
              <Col span={16}>
                <div className={styles.content}>
                  {t("footer-content-1")}
                  <span className={styles.verticlebar}>|</span>
                  {t("footer-content-2")}
                </div>
                <div className={styles.content}>
                  TEL&#41; 02-2290-1426
                  <span className={styles.verticlebar}>|</span>
                  Prof. Email&#41; jwjung@dongguk.edu
                </div>
                <div className={styles.copyright}>
                  © Copyright 2022 · Human Robot Interection LAB, Dongguk
                  University All Right Reserved
                </div>
              </Col>
              <Col span={4} />
              <Col span={4} />
              <Col span={20}>
                <Dropdown overlay={menu} placement="topCenter">
                  <div className={styles.bottom_box}>
                    Family Site
                    <PlusOutlined className={styles.plusIcon} />
                  </div>
                </Dropdown>
              </Col>
            </Row>
          </div>
        </>
      ) : (
        <>
          <div className={styles.quick_menu}>
            <Tag style={{ marginRight: "20px" }}>Quick menu</Tag>
            {quick_menu_list.map((item, idx) => (
              <>
                <span
                  className={styles.menu}
                  onClick={() => movePage(item.path)}
                >
                  {item.title}
                </span>
                {idx !== 6 && <span className={styles.verticlebar}>|</span>}
              </>
            ))}
          </div>
          <div>
            <Row>
              <Col span={4} style={{ textAlign: "center" }}>
                <img src="/assets/logo/logo.png" className={styles.logo} />
              </Col>
              <Col span={16}>
                <div className={styles.content}>
                  {t("footer-content-1")}
                  <span className={styles.verticlebar}>|</span>
                  {t("footer-content-2")}
                </div>
                <div className={styles.content}>
                  TEL&#41; 02-2290-1426
                  <span className={styles.verticlebar}>|</span>
                  Prof. Email&#41; jwjung@dongguk.edu
                </div>
                <div className={styles.copyright}>
                  © Copyright 2021 · Human Robot Interection LAB, Dongguk
                  University All Right Reserved
                </div>
              </Col>
              <Col span={4}>
                <Dropdown overlay={menu} placement="topCenter">
                  <div className={styles.bottom_box}>
                    Family Site
                    <PlusOutlined className={styles.plusIcon} />
                  </div>
                </Dropdown>
              </Col>
            </Row>
          </div>
        </>
      )}
    </div>
  );
}
export default BottomFooter;
