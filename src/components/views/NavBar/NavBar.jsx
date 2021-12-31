import React, { useState, useEffect } from "react";
import { Layout, Menu, Dropdown, Select, Button, Row, Col } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import styles from "@navbar/NavBar.module.css";
import { useHistory } from "react-router";

const { Header } = Layout;
const { Option } = Select;

function NavBar() {
  const [account, setAccount] = useState("user");
  const [language, setLanguage] = useState("한국어");
  const [page, setPage] = useState("home");
  const history = useHistory();
  const categories = [
    "Research Area",
    "Professor",
    "Members",
    "Publicatons",
    "Projects",
    "Board",
    "Contact",
  ];
  const path = [
    "/",
    "/research-area",
    "/professor",
    "/members",
    "/publications/journal",
    "/projects",
    "/board/notice",
    "/contact",
  ];

  const language_menu = (
    <Menu>
      <Menu.Item style={{ width: "100px" }}>
        <div style={{ fontSize: "1.1em" }}>한국어</div>
      </Menu.Item>
      <Menu.Item>
        <div style={{ fontSize: "1.1em" }}>English</div>
      </Menu.Item>
    </Menu>
  );

  const movePage = (url, idx) => {
    window.location.href = url;
    setPage(categories[idx]);
  };

  useEffect(() => {
    // console.log(window.location.pathname);
    var url_idx = path.findIndex((value) => value === window.location.pathname);
    if (url_idx === 0) setPage(categories[url_idx - 1]);
    console.log(categories[url_idx - 1]);
  }, []);

  return (
    <div className={styles.outer}>
      <div className={styles.header}>
        <span className={styles.header_menu} onClick={() => movePage("/")}>
          HOME
        </span>
        <span className={styles.bar}>|</span>
        <span className={styles.header_menu} onClick={() => movePage("/")}>
          동국대학교
        </span>
        <span className={styles.bar}>|</span>
        <span className={styles.header_menu} onClick={() => movePage("/login")}>
          로그인
        </span>
      </div>
      <Header className={styles.navbar}>
        <img
          className={styles.logo}
          src="/assets/logo.png"
          onClick={() => movePage("/")}
        />
        <div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={page}
            className={styles.menu}
          >
            {categories.map((submenu, idx) => {
              return (
                <Menu.Item
                  key={idx + 1}
                  onClick={() => movePage(path[idx + 1], idx)}
                >
                  <div style={{ fontSize: "1.1em" }}>{submenu}</div>
                </Menu.Item>
              );
            })}
            <Dropdown
              overlay={language_menu}
              placement="bottomCenter"
              className={styles.dropdown}
            >
              <div className={styles.language_select}>
                <GlobalOutlined />
              </div>
            </Dropdown>
          </Menu>
        </div>
      </Header>
    </div>
  );
}

export default NavBar;
