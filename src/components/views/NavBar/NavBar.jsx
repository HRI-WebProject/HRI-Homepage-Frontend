import React, { useState, useEffect } from "react";
import { Layout, Menu, Dropdown, Select, Button, Row, Col } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import styles from "@navbar/NavBar.module.css";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { clearUser } from "@actions/user_action";

const { Header } = Layout;
const { Option } = Select;

function NavBar() {
  const account = useSelector((state) => state.user.loginSuccess);
  const [isLogged, setIsLogged] = useState(false);
  const [language, setLanguage] = useState("한국어");
  const [page, setPage] = useState("home");
  const history = useHistory();
  const dispatch = useDispatch();
  const categories = [
    "Research",
    "Professor",
    "Members",
    "Publicatons",
    "Projects",
    "Board",
    "Contact",
  ];
  const path = [
    "/",
    "/research/researchArea",
    "/professor",
    "/members",
    "/publications/journal",
    "/projects",
    "/board/notice",
    "/contact",
  ];

  const language_menu = (
    <Menu>
      <Menu.Item style={{ width: "100px" }} key="ko">
        <div style={{ fontSize: "1.1em" }}>한국어</div>
      </Menu.Item>
      <Menu.Item>
        <div style={{ fontSize: "1.1em" }} key="en">
          English
        </div>
      </Menu.Item>
    </Menu>
  );

  const movePage = (url, idx) => {
    history.push(url);
    setPage(categories[idx]);
  };

  const handleLogout = () => {
    localStorage.clear();
    dispatch(clearUser());
    window.location.reload();
  };

  useEffect(() => {
    if (account && account.status === "OK") setIsLogged(true);
    var url_idx = path.findIndex((value) => value === window.location.pathname);
    if (url_idx === 0) setPage(categories[url_idx - 1]);
  }, []);

  useEffect(() => {
    if (account && account.status === "OK") setIsLogged(true);
  }, [account]);

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
        {isLogged === true && (
          <span className={styles.header_menu} onClick={handleLogout}>
            로그아웃
          </span>
        )}
        {isLogged === false && (
          <span
            className={styles.header_menu}
            onClick={() => movePage("/login")}
          >
            로그인
          </span>
        )}
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
