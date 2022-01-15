import React, { Fragment, useState, useEffect } from "react";
import { Menu } from "antd";
import { useHistory } from "react-router";
import styles from "@topmenu/TopMenu.module.css";

function TopMenu({ selected_key }) {
  const currentURL = window.location.pathname;
  const [key, setKey] = useState();
  const history = useHistory();
  const movePage = (url) => {
    history.push(url);
  };

  const renderSwitch = (param) => {
    switch (param) {
      case "ResearchArea":
        return (
          <>
            <Menu.Item
              key="research/researchArea"
              onClick={() => movePage("/research/researchArea")}
            >
              <font className={styles.menuitem}>연구 분야</font>
            </Menu.Item>
            <Menu.Item
              key="research/equipments"
              onClick={() => movePage("/research/equipments")}
            >
              <font className={styles.menuitem}>연구실 장비</font>
            </Menu.Item>
          </>
        );
      case "Members":
        return (
          <>
            <Menu.Item key="members" onClick={() => movePage("/members")}>
              <font className={styles.menuitem}>구성원</font>
            </Menu.Item>
            <Menu.Item key="alumni" onClick={() => movePage("/alumni")}>
              <font className={styles.menuitem}> 졸업생</font>
            </Menu.Item>
          </>
        );
      case "Professor":
        return (
          <>
            <Menu.Item key="professor" onClick={() => movePage("/professor")}>
              <font className={styles.menuitem}>교수진</font>
            </Menu.Item>
          </>
        );
      case "Board":
        return (
          <>
            <Menu.Item
              key="board/notice"
              onClick={() => movePage("/board/notice")}
            >
              <font className={styles.menuitem}>소식</font>
            </Menu.Item>
            <Menu.Item
              key="board/activity"
              onClick={() => movePage("/board/activity")}
            >
              <font className={styles.menuitem}>활동</font>
            </Menu.Item>
          </>
        );
      case "Publications":
        return (
          <>
            <Menu.Item
              key="publications/journal"
              onClick={() => movePage("/publications/journal")}
            >
              <font className={styles.menuitem}>학술지</font>
            </Menu.Item>
            <Menu.Item
              key="publications/conference"
              onClick={() => movePage("/publications/conference")}
            >
              <font className={styles.menuitem}>학술대회</font>
            </Menu.Item>
            <Menu.Item
              key="publications/patent"
              onClick={() => movePage("/publications/patent")}
            >
              <font className={styles.menuitem}>특허</font>
            </Menu.Item>
            <Menu.Item
              key="publications/book"
              onClick={() => movePage("/publications/book")}
            >
              <font className={styles.menuitem}>도서</font>
            </Menu.Item>
          </>
        );
    }
  };

  useEffect(() => {
    if (currentURL.indexOf("notice") !== -1) setKey("board/notice");
    else if (currentURL.indexOf("activity") !== -1) setKey("board/activity");
    else setKey(currentURL.substr(1, currentURL.length));
  }, []);

  return (
    <div>
      {key && (
        <Menu defaultSelectedKeys={key} mode="horizontal">
          <Fragment>{renderSwitch(selected_key)}</Fragment>
        </Menu>
      )}
    </div>
  );
}

export default TopMenu;
