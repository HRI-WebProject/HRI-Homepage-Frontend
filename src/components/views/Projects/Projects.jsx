import React, { useState, useEffect } from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import { Row, Col, Image, Card } from "antd";
import { Paper, Modal, Box, Backdrop } from "@mui/material";
import styles from "./Projects.module.css";
import TitleBar from "../../common/TitleBar/TitleBar";
import AddButton from "../../common/AddButton/AddButton";
import ButtonSet from "../../common/ButtonSet/ButtonSet";
import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t, i18n } = useTranslation();
  const { Meta } = Card;
  const account = useSelector((state) => state.user.loginSuccess);
  const [isLogged, setIsLogged] = useState(false);
  const [projectList, setProjectList] = useState();
  const [finishedProjectList, setFinishedProjectList] = useState();
  const [colSize, setColSize] = useState();
  const [curItem, setCurItem] = useState();
  const [open, setOpen] = useState(false);
  const handleOpen = (item) => {
    setOpen(true);
    setCurItem(item);
  };
  const handleClose = () => setOpen(false);
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1000,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const cardStyle = {
    width: "25%",
  };

  const isSmallScreen = useMediaQuery({
    query: "(max-width: 600px)",
  });

  useEffect(() => {
    if (account && account.status === "OK") setIsLogged(true);
    if (i18n.language === "ko") {
      axios
        .get("/api/projects")
        .then((res) => {
          if (res.status === 200) {
            let data = res.data.data;
            let onGoingProjects = data.filter(function (element) {
              return element.onGoing === false;
            });
            let finishedProjects = data.filter(function (element) {
              return element.onGoing === true;
            });
            onGoingProjects && setProjectList(onGoingProjects);
            finishedProjects && setFinishedProjectList(finishedProjects);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      axios
        .get("/api/en/projects")
        .then((res) => {
          if (res.status === 200) {
            let data = res.data.data;
            let onGoingProjects = data.filter(function (element) {
              return element.onGoing === false;
            });
            let finishedProjects = data.filter(function (element) {
              return element.onGoing === true;
            });
            onGoingProjects && setProjectList(onGoingProjects);
            finishedProjects && setFinishedProjectList(finishedProjects);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [account, i18n.language]);

  useEffect(() => {
    if (isSmallScreen) setColSize(24);
    else setColSize(12);
  });

  return (
    <div>
      <TitleBar title="projects" category="Projects" />
      <div className={styles.container}>
        <div>{isLogged && <AddButton />}</div>
        <div className={styles.subtitle}>
          <b>{t("ongoing-projects")}</b>
        </div>
        <div>
          <Row gutter={[16, 16]} className={styles.out_row}>
            {projectList &&
              projectList.map((item, idx) => (
                <>
                  <Col span={6} key={idx}>
                    <Fade top distance="30px">
                      <Card
                        hoverable
                        onClick={() => handleOpen(item)}
                        className={styles.modal_open_btn}
                        style={{
                          fontSize: "1.2em",
                          textAlign: "center",
                        }}
                      >
                        <div>
                          {item.topic && i18n.language === "ko" ? (
                            <b>{item.topic}</b>
                          ) : (
                            item.engTopic && <b>{item.engTopic}</b>
                          )}
                        </div>
                      </Card>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                      >
                        <Box sx={modalStyle}>
                          <>
                            {curItem && (
                              <Paper
                                elevation={0}
                                square
                                className={styles.paper}
                              >
                                <Row gutter={[16, 16]}>
                                  <Col span={colSize}>
                                    <div className={styles.ls}>
                                      <div className={styles.title}>
                                        {curItem.topic &&
                                        i18n.language === "ko" ? (
                                          <b>{curItem.topic}</b>
                                        ) : (
                                          curItem.engTopic && (
                                            <b>{curItem.engTopic}</b>
                                          )
                                        )}
                                      </div>
                                      <hr
                                        style={{ color: "#2f5597", height: 3 }}
                                      />
                                      <div className={styles.text1}>
                                        {i18n.language === "ko" ? (
                                          <>
                                            {curItem.subTopic &&
                                              curItem.subTopic
                                                .split("\n")
                                                .map((line, idx) => (
                                                  <span key={idx}>
                                                    {line}
                                                    <br />
                                                  </span>
                                                ))}
                                          </>
                                        ) : (
                                          <>
                                            {curItem.engSubTopic &&
                                              curItem.engSubTopic
                                                .split("\n")
                                                .map((line, idx) => (
                                                  <span key={idx}>
                                                    {line}
                                                    <br />
                                                  </span>
                                                ))}
                                          </>
                                        )}
                                      </div>
                                      <div className={styles.contents}>
                                        <ul>
                                          {i18n.language === "ko" ? (
                                            <>
                                              {!!curItem.detail1 && (
                                                <li key="1">
                                                  {curItem.detail1}
                                                </li>
                                              )}
                                              {!!curItem.detail2 && (
                                                <li key="2">
                                                  {curItem.detail2}
                                                </li>
                                              )}
                                              {!!curItem.detail3 && (
                                                <li key="3">
                                                  {curItem.detail3}
                                                </li>
                                              )}
                                              {!!curItem.detail4 && (
                                                <li key="4">
                                                  {curItem.detail4}
                                                </li>
                                              )}
                                              {!!curItem.detail5 && (
                                                <li key="5">
                                                  {curItem.detail5}
                                                </li>
                                              )}
                                            </>
                                          ) : (
                                            <>
                                              {!!curItem.engDetail1 && (
                                                <li key="1">
                                                  {curItem.engDetail1}
                                                </li>
                                              )}
                                              {!!curItem.engDetail2 && (
                                                <li key="2">
                                                  {curItem.engDetail2}
                                                </li>
                                              )}
                                              {!!curItem.engDetail3 && (
                                                <li key="3">
                                                  {curItem.engDetail3}
                                                </li>
                                              )}
                                              {!!curItem.engDetail4 && (
                                                <li key="4">
                                                  {curItem.engDetail4}
                                                </li>
                                              )}
                                              {!!curItem.engDetail5 && (
                                                <li key="5">
                                                  {curItem.engDetail5}
                                                </li>
                                              )}
                                            </>
                                          )}
                                        </ul>
                                      </div>
                                    </div>
                                  </Col>
                                  <Col span={colSize} className={styles.rs}>
                                    <Image
                                      preview={false}
                                      width={"100%"}
                                      height={550}
                                      src={curItem.photo}
                                    />
                                  </Col>
                                </Row>
                              </Paper>
                            )}
                            {isLogged && curItem && (
                              <ButtonSet
                                pageFeature="projects"
                                id={curItem.id}
                              />
                            )}
                          </>
                        </Box>
                      </Modal>
                    </Fade>
                  </Col>
                </>
              ))}
          </Row>
        </div>
        {finishedProjectList && finishedProjectList.length !== 0 && (
          <div className={styles.subtitle} style={{ paddingTop: "60px" }}>
            <b>{t("finished-projects")}</b>
          </div>
        )}
        <div>
          <Row gutter={[16, 16]} className={styles.out_row}>
            {finishedProjectList &&
              finishedProjectList.map((item, idx) => (
                <>
                  <Col span={6} key={idx}>
                    <Fade top distance="30px">
                      <Card
                        hoverable
                        onClick={() => handleOpen(item)}
                        className={styles.modal_open_btn}
                        style={{ fontSize: "1.2em", textAlign: "center" }}
                      >
                        <div>
                          {item.topic && i18n.language === "ko" ? (
                            <b>{item.topic}</b>
                          ) : (
                            item.engTopic && <b>{item.engTopic}</b>
                          )}
                        </div>
                      </Card>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                      >
                        <Box sx={modalStyle}>
                          <>
                            {curItem && (
                              <Paper
                                elevation={0}
                                square
                                className={styles.paper}
                              >
                                <Row gutter={[16, 16]}>
                                  <Col span={colSize}>
                                    <div className={styles.ls}>
                                      <div className={styles.title}>
                                        {curItem.topic &&
                                        i18n.language === "ko" ? (
                                          <b>{curItem.topic}</b>
                                        ) : (
                                          curItem.engTopic && (
                                            <b>{curItem.engTopic}</b>
                                          )
                                        )}
                                      </div>
                                      <hr
                                        style={{ color: "#2f5597", height: 3 }}
                                      />
                                      <div className={styles.text1}>
                                        {i18n.language === "ko" ? (
                                          <>
                                            {curItem.subTopic &&
                                              curItem.subTopic
                                                .split("\n")
                                                .map((line, idx) => (
                                                  <span key={idx}>
                                                    {line}
                                                    <br />
                                                  </span>
                                                ))}
                                          </>
                                        ) : (
                                          <>
                                            {curItem.engSubTopic &&
                                              curItem.engSubTopic
                                                .split("\n")
                                                .map((line, idx) => (
                                                  <span key={idx}>
                                                    {line}
                                                    <br />
                                                  </span>
                                                ))}
                                          </>
                                        )}
                                      </div>
                                      <div className={styles.contents}>
                                        <ul>
                                          {i18n.language === "ko" ? (
                                            <>
                                              {!!curItem.detail1 && (
                                                <li key="1">
                                                  {curItem.detail1}
                                                </li>
                                              )}
                                              {!!curItem.detail2 && (
                                                <li key="2">
                                                  {curItem.detail2}
                                                </li>
                                              )}
                                              {!!curItem.detail3 && (
                                                <li key="3">
                                                  {curItem.detail3}
                                                </li>
                                              )}
                                              {!!curItem.detail4 && (
                                                <li key="4">
                                                  {curItem.detail4}
                                                </li>
                                              )}
                                              {!!curItem.detail5 && (
                                                <li key="5">
                                                  {curItem.detail5}
                                                </li>
                                              )}
                                            </>
                                          ) : (
                                            <>
                                              {!!curItem.engDetail1 && (
                                                <li key="1">
                                                  {curItem.engDetail1}
                                                </li>
                                              )}
                                              {!!curItem.engDetail2 && (
                                                <li key="2">
                                                  {curItem.engDetail2}
                                                </li>
                                              )}
                                              {!!curItem.engDetail3 && (
                                                <li key="3">
                                                  {curItem.engDetail3}
                                                </li>
                                              )}
                                              {!!curItem.engDetail4 && (
                                                <li key="4">
                                                  {curItem.engDetail4}
                                                </li>
                                              )}
                                              {!!curItem.engDetail5 && (
                                                <li key="5">
                                                  {curItem.engDetail5}
                                                </li>
                                              )}
                                            </>
                                          )}
                                        </ul>
                                      </div>
                                    </div>
                                  </Col>
                                  <Col span={colSize} className={styles.rs}>
                                    <Image
                                      preview={false}
                                      width={"100%"}
                                      height={550}
                                      src={curItem.photo}
                                    />
                                  </Col>
                                </Row>
                              </Paper>
                            )}
                            {isLogged && curItem && (
                              <ButtonSet
                                pageFeature="projects"
                                id={curItem.id}
                              />
                            )}
                          </>
                        </Box>
                      </Modal>
                    </Fade>
                  </Col>
                </>
              ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Projects;
