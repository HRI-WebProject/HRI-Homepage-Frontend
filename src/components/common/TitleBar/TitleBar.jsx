import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "@titlebar/TitleBar.module.css";
import { Row, Col, Breadcrumb, Layout, Menu } from "antd";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";

function TitleBar({ title }) {
  const history = useHistory();

  const movePage = (url) => {
    history.push(url);
  };

  const renderSwitch = (param) => {
    switch (param) {
      case "구성원":
      case "졸업생":
        return (
          <>
            <Breadcrumb.Item href="/members" className={styles.a_tag}>
              Members
            </Breadcrumb.Item>
            <Breadcrumb.Item>{title}</Breadcrumb.Item>
          </>
        );
      case "연구 분야":
      case "교수진":
      case "프로젝트 소개":
      case "문의":
        return (
          <>
            <Breadcrumb.Item>{title}</Breadcrumb.Item>
          </>
        );
      case "구성원":
      case "졸업생":
        return (
          <>
            <Breadcrumb.Item
              href="/publications/journal"
              className={styles.a_tag}
            >
              Members
            </Breadcrumb.Item>
            <Breadcrumb.Item>{title}</Breadcrumb.Item>
          </>
        );
      case "소식":
      case "활동":
        return (
          <>
            <Breadcrumb.Item href="/board/notice" className={styles.a_tag}>
              Board
            </Breadcrumb.Item>
            <Breadcrumb.Item>{title}</Breadcrumb.Item>
          </>
        );
      case "학술지":
      case "특허":
        return (
          <>
            <Breadcrumb.Item
              href="/publications/journal"
              className={styles.a_tag}
            >
              Publications
            </Breadcrumb.Item>
            <Breadcrumb.Item>{title}</Breadcrumb.Item>
          </>
        );
    }
  };

  return (
    <div className={styles.titlebar}>
      <Breadcrumb separator=">" style={{ paddingBottom: "10px" }}>
        <Breadcrumb.Item href="/" className={styles.a_tag}>
          <span>
            <HomeIcon className={styles.homeicon} fontSize="large" />홈
          </span>
        </Breadcrumb.Item>
        {renderSwitch(title)}
      </Breadcrumb>
      <Typography variant="h4">
        <b>{title}</b>
      </Typography>
    </div>
  );
}

export default TitleBar;
