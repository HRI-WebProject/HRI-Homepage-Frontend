import React from "react";
import styles from "@common/Header/Header.module.css";
import { Breadcrumb } from "antd";
import HomeIcon from "@mui/icons-material/Home";

function Header({ title, category }) {
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
            <Breadcrumb.Item>{title}</Breadcrumb.Item>
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
            <Breadcrumb.Item>{title}</Breadcrumb.Item>
          </>
        );
      case "교수진":
      case "프로젝트 소개":
      case "문의":
        return (
          <>
            <Breadcrumb.Item>{title}</Breadcrumb.Item>
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
            <Breadcrumb.Item>{title}</Breadcrumb.Item>
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
            <Breadcrumb.Item>{title}</Breadcrumb.Item>
          </>
        );
    }
  };

  const renderSwitchIntro = (param) => {
    switch (param) {
      case "Research":
        return (
          <>
            <div>소개말</div>
            연구 분야와 연구실에서 활용할 수 있는 대표 장비들에 대해 소개합니다.
          </>
        );
      case "Professor":
        return <>연구실 교수님 소개입니다.</>;
      case "Members":
        return <>연구실 구성원 정보입니다.</>;
      case "Publications":
        return <>연구실에서 발표한 논문 및 특허 부분입니다.</>;
      case "Projects":
        return <>현재 연구실에서 진행 중인 프로젝트에 대한 소개입니다.</>;
      case "Board":
        return (
          <>연구실 행사 관련 소식을 전하고, 활동 모습에 대해 소개합니다.</>
        );
      case "Contact":
        return <>연구실 연락처입니다.</>;
      default:
        break;
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles.inner}>
        <div>
          <Breadcrumb separator="">
            <Breadcrumb.Item href="/" className={styles.a_tag}>
              <span style={{ color: "white" }}>
                <HomeIcon className={styles.homeicon} fontSize="large" />
                홈&nbsp;&nbsp;&gt;&nbsp;&nbsp;
              </span>
            </Breadcrumb.Item>
            <span style={{ color: "white" }}>{renderSwitch(title)}</span>
          </Breadcrumb>
        </div>
        <div className={styles.title}>{category}</div>
        <div className={styles.subtitle}>{renderSwitchIntro(category)}</div>
      </div>
    </div>
  );
}

export default Header;
