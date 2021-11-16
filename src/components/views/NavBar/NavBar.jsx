import React, { useState, useEffect } from "react";
import { Layout, Menu, Dropdown, Select, Button } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import styles from "@navbar/NavBar.module.css";
import { useHistory } from "react-router";

const { Header } = Layout;
const { Option } = Select;

function NavBar({ currentPage }) {
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
    "/research-area",
    "/professor",
    "/members",
    "/publications",
    "/projects",
    "/board",
    "/contact",
  ];

  const menu = (
    <Menu>
      <Menu.Item>한국어</Menu.Item>
      <Menu.Item>English</Menu.Item>
    </Menu>
  );

  const movePage = (url, idx) => {
    history.push(url);
    setPage(categories[idx]);
  };

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
        <div className={styles.menu}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["0"]}>
            {categories.map((submenu, idx) => {
              return (
                <Menu.Item
                  key={idx + 1}
                  onClick={() => movePage(path[idx], idx)}
                >
                  {submenu}
                </Menu.Item>
              );
            })}
            <Dropdown
              overlay={menu}
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
