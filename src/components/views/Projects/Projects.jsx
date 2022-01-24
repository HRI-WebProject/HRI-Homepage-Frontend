import React, { useState, useEffect } from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import { Row, Col, Image } from "antd";
import { Paper } from "@mui/material";
import styles from "./Projects.module.css";
import TitleBar from "../../common/TitleBar/TitleBar";
import ProjectBudget from "./sections/projectBudget/ProjectBudget";
import AddButton from "../../common/AddButton/AddButton";
import ButtonSet from "../../common/ButtonSet/ButtonSet";
import Fade from "react-reveal/Fade";

function Projects() {
  const account = useSelector((state) => state.user.loginSuccess);
  const [isLogged, setIsLogged] = useState(false);
  const [projectList, setProjectList] = useState();
  const [colSize, setColSize] = useState();
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 600px)",
  });

  useEffect(() => {
    if (account && account.status === "OK") setIsLogged(true);
    axios
      .get("/projects")
      .then((res) => {
        if (res.status === 200) {
          setProjectList(res.data.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (isSmallScreen) setColSize(24);
    else setColSize(12);
  });

  return (
    <div>
      <TitleBar title="프로젝트 소개" category="Projects" />
      <div className={styles.container}>
        <ProjectBudget />
        <div className={styles.subtitle}>
          <b>진행 중인 연구 프로젝트</b>
        </div>
        <div>{isLogged && <AddButton />}</div>
        <Row gutter={[16, 16]} className={styles.out_row}>
          {projectList &&
            projectList.map((item, idx) => (
              <Col span={24} key={idx}>
                <Fade top distance="30px">
                  <>
                    <Paper
                      elevation={0}
                      square
                      elevation={0}
                      square
                      className={styles.paper}
                    >
                      <Row gutter={[16, 16]}>
                        <Col span={colSize}>
                          <div className={styles.ls}>
                            <div className={styles.title}>
                              <b>{item.topic}</b>
                            </div>
                            <hr style={{ color: "#2f5597", height: 3 }} />
                            <div className={styles.text1}>
                              {item.subTopic.split("\n").map((line, idx) => (
                                <span key={idx}>
                                  {line}
                                  <br />
                                </span>
                              ))}
                            </div>
                            <div className={styles.contents}>
                              <ul>
                                {!!item.detail1 && (
                                  <li key="1">{item.detail1}</li>
                                )}
                                {!!item.detail2 && (
                                  <li key="2">{item.detail2}</li>
                                )}
                                {!!item.detail3 && (
                                  <li key="3">{item.detail3}</li>
                                )}
                                {!!item.detail4 && (
                                  <li key="4">{item.detail4}</li>
                                )}
                                {!!item.detail5 && (
                                  <li key="5">{item.detail5}</li>
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
                            src={item.photo}
                          />
                        </Col>
                      </Row>
                    </Paper>
                    {isLogged && (
                      <ButtonSet pageFeature="projects" id={item.id} />
                    )}
                  </>
                </Fade>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
}

export default Projects;
