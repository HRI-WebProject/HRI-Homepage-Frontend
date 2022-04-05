import React, { useState, useEffect } from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import styles from "./Contact.module.css";
import MapContainer from "./sections/MapContainer";
import TitleBar from "../../common/TitleBar/TitleBar";
import { Row, Col, Button } from "antd";
import { Paper, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";
import EditCard from "./Admin/EditCard";

function Contact() {
  const { t, i18n } = useTranslation();
  const [colSize, setColSize] = useState();
  const [showEditCard, setShowEditCard] = useState(false);
  const [contactInfo, setContactInfo] = useState();
  const account = useSelector((state) => state.user.loginSuccess);
  const [isLogged, setIsLogged] = useState(false);
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 900px)",
  });

  const editInfo = () => {
    setShowEditCard(!showEditCard);
  };

  useEffect(() => {
    if (account && account.status === "OK") setIsLogged(true);
    axios
      .get("/api/contact")
      .then((res) => {
        if (res.status === 200) {
          setContactInfo(res.data.data[0]);
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
      <TitleBar title="contact" category="Contact" />
      <div className={styles.container}>
        <Paper elevation={0} square className={styles.paper}>
          {isLogged && (
            <span className={styles.edit_button_container}>
              <Button className={styles.edit_button} onClick={() => editInfo()}>
                Edit
              </Button>
            </span>
          )}
          <Row>
            <>
              <Col span={colSize}>
                <MapContainer />
              </Col>
              <Col span={colSize} className={styles.col2}>
                {showEditCard ? (
                  <EditCard />
                ) : (
                  <>
                    {contactInfo && (
                      <>
                        <div className={styles.namebox}>
                          <font className={styles.part}>Professor</font>
                          <font className={styles.name}>
                            &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                            {contactInfo.professorName}
                          </font>
                        </div>
                        <br />
                        <div className={styles.content}>
                          <font>
                            {contactInfo.professorEmail}
                            <br />
                            {contactInfo.professorPhone}
                          </font>
                        </div>
                        <Divider className={styles.divider} />
                        <div className={styles.namebox}>
                          <font className={styles.part}>Lab Manager</font>
                          <font className={styles.name}>
                            &ensp;&ensp;&ensp;&ensp;{contactInfo.labManagerName}
                          </font>
                        </div>
                        <br />
                        <div className={styles.content}>
                          <font>
                            {contactInfo.labManagerEmail}
                            <br />
                            {contactInfo.labManagerPhone}
                          </font>
                        </div>
                        <Divider className={styles.divider} />
                        <div className={styles.namebox}>
                          <font className={styles.part}>Office</font>
                        </div>
                        <br />
                        <div style={{ paddingBottom: "20px" }}>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={t("dgu-hri-website")}
                            className={styles.link}
                          >
                            {t("dgu-hri-website")}
                          </a>
                        </div>
                        <div className={styles.content}>
                          <font>
                            {contactInfo.officeLocation}
                            <br />
                            {contactInfo.officePhone}
                          </font>
                        </div>
                      </>
                    )}
                  </>
                )}
              </Col>
            </>
          </Row>
        </Paper>
      </div>
    </div>
  );
}

export default Contact;
