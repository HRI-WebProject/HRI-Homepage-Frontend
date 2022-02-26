import React, { useState } from "react";
import EmailIcon from "@material-ui/icons/Email";
import { styled } from "@mui/material/styles";
import { Row, Col, Image } from "antd";
import styles from "../Members.module.css";
import ButtonSet from "../../../common/ButtonSet/ButtonSet";
import Fade from "react-reveal/Fade";

function MemberGrid({ memberData, col_size, degree, isLogged }) {
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });
  return (
    <>
      <Row gutter={[32, 32]}>
        {memberData &&
          memberData.map((item, idx) => (
            <Col span={col_size} key={idx}>
              <Fade top distance="20px">
                <>
                  <div className={styles.grid}>
                    <Row>
                      <Col flex="200px">
                        <Image
                          width={200}
                          height={"100%"}
                          src={item.photo}
                          preview={false}
                        />
                      </Col>
                      <Col flex="auto" className={styles.contents}>
                        <div style={{ fontSize: "0.9em", color: "#939393" }}>
                          {item.engName}
                        </div>
                        <div style={{ fontSize: "1.3em", fontWeight: "bold" }}>
                          {item.name}
                        </div>
                        <div>{degree}</div>

                        <hr className={styles.hr_tag} />
                        {item.researchArea ? (
                          <div style={{ fontSize: "0.9em" }}>
                            <span className={styles.hashtag}>#</span>
                            {item.researchArea}
                          </div>
                        ) : (
                          <div>&nbsp;</div>
                        )}
                        {item.email ? (
                          <div style={{ fontSize: "0.9em" }}>
                            <EmailIcon
                              className={styles.emailIcon}
                              style={{ fontSize: "1.2em", color: "#2f5597" }}
                            />
                            <span style={{ paddingLeft: "10px" }}>
                              {item.email}
                            </span>
                          </div>
                        ) : (
                          <div>&nbsp;</div>
                        )}
                      </Col>
                    </Row>
                  </div>
                  {isLogged && <ButtonSet pageFeature="members" id={item.id} />}
                </>
              </Fade>
            </Col>
          ))}
      </Row>
    </>
  );
}

export default MemberGrid;
