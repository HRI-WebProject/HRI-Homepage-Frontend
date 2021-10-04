import React, { useEffect } from "react";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import styles from "./NavBar.module.css";
import { useHistory } from "react-router";
const { Header } = Layout;

function NavBar(props) {
  const history = useHistory();
  const categories = [
    "Research Area",
    "Members",
    "Publicatons",
    "Projects",
    "Board",
    "Contact",
  ];
  const path = [
    "/research-area",
    "/members",
    "/publications",
    "/projects",
    "/board/notice",
    "/contact",
  ];
  const movePage = (url) => {
    history.push(url);
    if (url === "/") {
    }
  };

  return (
    <>
      <div className={styles.header}>
        <Header>
          <div className={styles.logo} onClick={() => movePage("/")} />
          <div className={styles.menu}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["0"]}>
              {new Array(6).fill(null).map((_, index) => {
                const key = index + 1;
                return (
                  <Menu.Item
                    key={key}
                    onClick={() => movePage(path[index])}
                  >{`${categories[index]}`}</Menu.Item>
                );
              })}
            </Menu>
          </div>
        </Header>
      </div>
    </>
  );
}

export default NavBar;
