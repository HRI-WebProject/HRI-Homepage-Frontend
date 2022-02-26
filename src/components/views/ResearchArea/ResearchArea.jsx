import React, { useState, useEffect } from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import styles from "./ResearchArea.module.css";
import { Paper } from "@mui/material";
import TitleBar from "../../common/TitleBar/TitleBar";
import TopMenu from "../../common/TopMenu/TopMenu";
import { Row, Col, Card, Image } from "antd";
import AddButton from "../../common/AddButton/AddButton";
import ButtonSet from "../../common/ButtonSet/ButtonSet";
import { useTranslation } from "react-i18next";

function ResearchArea() {
  const account = useSelector((state) => state.user.loginSuccess);
  const [isLogged, setIsLogged] = useState(false);
  const [researchList, setResearchList] = useState();
  const [colSize, setColSize] = useState();
  const { Meta } = Card;
  const { t, i18n } = useTranslation();
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 800px)",
  });

  useEffect(() => {
    if (account && account.status === "OK") setIsLogged(true);
    axios
      .get("/researchArea")
      .then((res) => {
        if (res.status === 200) {
          setResearchList(res.data.data);
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
      <TitleBar title="researchArea" category="Research" />
      <div className={styles.container}>
        <TopMenu selected_key="ResearchArea" />
        <Paper elevation={0} square className={styles.paper}>
          {isLogged && <AddButton />}
          <div>
            <div className={styles.research_topic_title}>
              HRI Lab Research Topics
            </div>
            <div>
              <Row gutter={[16, 16]}>
                {researchList &&
                  researchList.map((item, idx) => (
                    <Col span={colSize} key={idx}>
                      <Card
                        cover={
                          <Image
                            preview={false}
                            alt="example"
                            style={{ height: "300px" }}
                            src={item.photo}
                          />
                        }
                      >
                        <Meta title={item.name} description={item.eng_name} />
                      </Card>
                    </Col>
                  ))}
              </Row>
            </div>
          </div>
          <div style={{ paddingTop: "30px" }}>
            {researchList &&
              researchList.map((item, idx) => (
                <div className={styles.item} key={idx}>
                  <div>
                    <div className={styles.circle}>{idx + 1}</div>
                    <div className={styles.item_name}>
                      {i18n.language === "ko" && item.name}
                      {i18n.language === "en" && item.engName}
                    </div>
                  </div>
                  <div className={styles.item_detail}>
                    {i18n.language === "ko" ? (
                      <>
                        {item.detail &&
                          item.detail.split("\n").map((line, idx) => (
                            <span key={idx}>
                              {line}
                              <br />
                            </span>
                          ))}
                      </>
                    ) : (
                      <>
                        {item.engDetail &&
                          item.engDetail.split("\n").map((line, idx) => (
                            <span key={idx}>
                              {line}
                              <br />
                            </span>
                          ))}
                      </>
                    )}
                  </div>
                  {isLogged && (
                    <ButtonSet pageFeature="researchArea" id={item.id} />
                  )}
                </div>
              ))}
          </div>
        </Paper>
      </div>{" "}
    </div>
  );
}

export default ResearchArea;
