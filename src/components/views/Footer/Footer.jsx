import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./Footer.module.css";
import { PlusOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import { Row, Col, Tag, Menu, Dropdown } from "antd";
import { useTranslation } from "react-i18next";
import { imageData } from "../../../assets/images";

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
        <a target="_blank" rel="noopener noreferrer" href={t("dgu-website")}>
          {t("footer-fs-1")}
        </a>
      </Menu.Item>
      <Menu.Item className={styles.menuItem} key={2}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={t("dgu-engineer-website")}
        >
          {t("footer-fs-2")}
        </a>
      </Menu.Item>
      <Menu.Item className={styles.menuItem} key={3}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={t("dgu-cse-website")}
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
                <img src={imageData.logo} className={styles.logo} />
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
                  TEL&#41; {t("lab-tel")}
                  <span className={styles.verticlebar}>|</span>
                  Email&#41;&nbsp;{t("prof-email")}
                </div>
                <div className={styles.copyright}>{t("footer-copyright")}</div>
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
                <img src={imageData.logo} className={styles.logo} />
              </Col>
              <Col span={16}>
                <div className={styles.content}>
                  {t("footer-content-1")}
                  <span className={styles.verticlebar}>|</span>
                  {t("footer-content-2")}
                </div>
                <div className={styles.content}>
                  TEL&#41; {t("lab-tel")}
                  <span className={styles.verticlebar}>|</span>
                  Email&#41;&nbsp;{t("prof-email")}
                </div>
                <div className={styles.copyright}>{t("footer-copyright")}</div>
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
