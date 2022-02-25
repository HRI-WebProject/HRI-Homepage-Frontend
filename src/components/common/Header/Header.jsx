import React from "react";
import styles from "./Header.module.css";
import { Breadcrumb } from "antd";
import HomeIcon from "@mui/icons-material/Home";
import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";

function Header({ title, category }) {
  const { t, i18n } = useTranslation();
  const renderSwitch = (param) => {
    switch (param) {
      case "members":
      case "alumni":
        return (
          <>
            <Breadcrumb.Item href="/members" className={styles.a_tag}>
              <font color="white">Members</font>
            </Breadcrumb.Item>
            &nbsp;&nbsp;&gt;&nbsp;&nbsp;
            <Breadcrumb.Item>{t(title)}</Breadcrumb.Item>
          </>
        );
      case "researchArea":
      case "researchEquipment":
        return (
          <>
            <Breadcrumb.Item
              href="/research/researchArea"
              className={styles.a_tag}
            >
              <font color="white">Research</font>
            </Breadcrumb.Item>
            &nbsp;&nbsp;&gt;&nbsp;&nbsp;
            <Breadcrumb.Item>{t(title)}</Breadcrumb.Item>
          </>
        );
      case "professor":
      case "projects":
      case "contact":
        return (
          <>
            <Breadcrumb.Item>{t(title)}</Breadcrumb.Item>
          </>
        );
      case "notice":
      case "activity":
        return (
          <>
            <Breadcrumb.Item href="/board/notice" className={styles.a_tag}>
              <font color="white">Board</font>
            </Breadcrumb.Item>
            &nbsp;&nbsp;&gt;&nbsp;&nbsp;
            <Breadcrumb.Item>{t(title)}</Breadcrumb.Item>
          </>
        );
      case "journal":
      case "patent":
      case "conference":
      case "book":
        return (
          <>
            <Breadcrumb.Item
              href="/publications/journal"
              className={styles.a_tag}
            >
              <font color="white">Publications</font>
            </Breadcrumb.Item>
            &nbsp;&nbsp;&gt;&nbsp;&nbsp;
            <Breadcrumb.Item>{t(title)}</Breadcrumb.Item>
          </>
        );
    }
  };

  const renderSwitchIntro = (param) => {
    switch (param) {
      case "Research":
        return <>{t("research-header")}</>;
      case "Professor":
        return <>{t("professor-header")}</>;
      case "Members":
        return <>{t("members-header")}</>;
      case "Publications":
        return <>{t("pub-header")}</>;
      case "Projects":
        return <>{t("projects-header")}</>;
      case "Board":
        return <>{t("board-header")}</>;
      case "Contact":
        return <>{t("contact-header")}</>;
      default:
        break;
    }
  };

  return (
    <div className={styles.header}>
      <Fade bottom distance="30px">
        <div className={styles.inner}>
          <div>
            <Breadcrumb separator="">
              <Breadcrumb.Item href="/" className={styles.a_tag}>
                <span className={styles.home_tag}>
                  <HomeIcon className={styles.homeicon} fontSize="large" />
                  Home&nbsp;&nbsp;&gt;&nbsp;&nbsp;
                </span>
              </Breadcrumb.Item>
              <span style={{ color: "white" }}>{renderSwitch(title)}</span>
            </Breadcrumb>
          </div>
          <div className={styles.title}>{category}</div>
          <div className={styles.subtitle}>{renderSwitchIntro(category)}</div>
        </div>
      </Fade>
    </div>
  );
}

export default Header;
