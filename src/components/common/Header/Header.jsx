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
      case "구성원":
      case "졸업생":
        return (
          <>
            <Breadcrumb.Item href="/members" className={styles.a_tag}>
              <font color="white">Members</font>
            </Breadcrumb.Item>
            &nbsp;&nbsp;&gt;&nbsp;&nbsp;
            <Breadcrumb.Item>{t(title)}</Breadcrumb.Item>
          </>
        );
      case "연구 분야":
      case "연구실 장비":
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
      case "교수진":
      case "프로젝트 소개":
      case "문의":
        console.log("여기:", t(title));
        return (
          <>
            <Breadcrumb.Item>{t(title)}</Breadcrumb.Item>
          </>
        );
      case "소식":
      case "활동":
        return (
          <>
            <Breadcrumb.Item href="/board/notice" className={styles.a_tag}>
              <font color="white">Board</font>
            </Breadcrumb.Item>
            &nbsp;&nbsp;&gt;&nbsp;&nbsp;
            <Breadcrumb.Item>{t(title)}</Breadcrumb.Item>
          </>
        );
      case "학술지":
      case "특허":
      case "학술대회":
      case "도서":
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
                <span style={{ color: "white" }}>
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
