import React, { Fragment } from "react";
import EmailIcon from "@material-ui/icons/Email";
import { styled } from "@mui/material/styles";
import { Row, Col, Image } from "antd";
import styles from "../Professor.module.css";
import ButtonSet from "../../../common/ButtonSet/ButtonSet";
import Fade from "react-reveal/Fade";

function ProfessorGrid({ professorData, isLogged }) {
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  return (
    <div>
      <Row gutter={[16, 32]}>
        {professorData &&
          professorData.map((item, idx) => (
            <Fragment key={idx}>
              <Col span={24} key={idx}>
                <Fade top distance="20px">
                  <>
                    <div className={styles.grid}>
                      <Row>
                        <Col flex="300px">
                          <div className={styles.image}>
                            <Image
                              width={"85%"}
                              src={item.photo}
                              preview={false}
                            />
                          </div>
                        </Col>
                        <Col flex="auto">
                          <div className={styles.contents}>
                            <div
                              style={{ fontSize: "0.9em", color: "#939393" }}
                            >
                              {item.engName}
                            </div>
                            <div
                              style={{
                                fontSize: "1.8em",
                                fontWeight: "bold",
                                paddingBottom: "20px",
                              }}
                            >
                              {item.name.slice(0, 1) +
                                " " +
                                item.name.slice(1, 2) +
                                " " +
                                item.name.slice(2, 3)}
                            </div>
                            <div style={{ paddingBottom: "20px" }}>
                              <b>
                                {item.boldDetail
                                  .split("\n")
                                  .map((line, idx) => (
                                    <span key={idx}>
                                      {line}
                                      <br />
                                    </span>
                                  ))}
                              </b>
                            </div>
                            <div style={{ lineHeight: "30px" }}>
                              {item.detail &&
                                item.detail.split("\n").map((line, idx) => (
                                  <span key={idx}>
                                    {line}
                                    <br />
                                  </span>
                                ))}
                            </div>
                            <hr className={styles.hr_tag} />
                            <div style={{ fontSize: "0.9em" }}>
                              <EmailIcon
                                className={styles.emailIcon}
                                style={{ fontSize: "1.2em", color: "#2f5597" }}
                              />
                              <span style={{ paddingLeft: "10px" }}>
                                {item.email}
                              </span>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    {isLogged && (
                      <ButtonSet pageFeature="professor" id={item.id} />
                    )}
                  </>
                </Fade>
              </Col>
            </Fragment>
          ))}
      </Row>
    </div>
  );
}

export default ProfessorGrid;
