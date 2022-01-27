import React, { Fragment, useState, useEffect } from "react";
import { Menu } from "antd";
import { useHistory } from "react-router";
import styles from "./TopMenu.module.css";
import { useTranslation } from "react-i18next";

function TopMenu({ selected_key }) {
  const currentURL = window.location.pathname;
  const [key, setKey] = useState();
  const history = useHistory();
  const { t, i18n } = useTranslation();
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
              <font className={styles.menuitem}>{t("researchArea")}</font>
            </Menu.Item>
            <Menu.Item
              key="research/equipments"
              onClick={() => movePage("/research/equipments")}
            >
              <font className={styles.menuitem}>{t("researchEquipment")}</font>
            </Menu.Item>
          </>
        );
      case "Members":
        return (
          <>
            <Menu.Item key="members" onClick={() => movePage("/members")}>
              <font className={styles.menuitem}>{t("members")}</font>
            </Menu.Item>
            <Menu.Item key="alumni" onClick={() => movePage("/alumni")}>
              <font className={styles.menuitem}> {t("alumni")}</font>
            </Menu.Item>
          </>
        );
      case "Professor":
        return (
          <>
            <Menu.Item key="professor" onClick={() => movePage("/professor")}>
              <font className={styles.menuitem}>{t("professor")}</font>
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
              <font className={styles.menuitem}>{t("notice")}</font>
            </Menu.Item>
            <Menu.Item
              key="board/activity"
              onClick={() => movePage("/board/activity")}
            >
              <font className={styles.menuitem}>{t("activity")}</font>
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
              <font className={styles.menuitem}>{t("journal")}</font>
            </Menu.Item>
            <Menu.Item
              key="publications/conference"
              onClick={() => movePage("/publications/conference")}
            >
              <font className={styles.menuitem}>{t("conference")}</font>
            </Menu.Item>
            <Menu.Item
              key="publications/patent"
              onClick={() => movePage("/publications/patent")}
            >
              <font className={styles.menuitem}>{t("patent")}</font>
            </Menu.Item>
            <Menu.Item
              key="publications/book"
              onClick={() => movePage("/publications/book")}
            >
              <font className={styles.menuitem}>{t("book")}</font>
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
