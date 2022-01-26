import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./Contact.module.css";
import MapContainer from "./sections/MapContainer";
import TitleBar from "../../common/TitleBar/TitleBar";
import { Row, Col } from "antd";
import { Paper, Divider, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t, i18n } = useTranslation();
  const [colSize, setColSize] = useState();
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 900px)",
  });

  useEffect(() => {
    if (isSmallScreen) setColSize(24);
    else setColSize(12);
  });

  return (
    <div>
      <TitleBar title="contact" category="Contact" />
      <div className={styles.container}>
        <Paper elevation={0} square className={styles.paper}>
          <Row>
            <>
              <Col span={colSize}>
                <MapContainer />
              </Col>
              <Col span={colSize} className={styles.col2}>
                <div className={styles.namebox}>
                  <font className={styles.part}>Professor</font>
                  <font className={styles.name}>
                    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                    {t("contact-prof")}
                  </font>
                </div>
                <br />
                <div className={styles.content}>
                  <font>
                    jwjung@dongguk.edu
                    <br />
                    02-2260-3812
                  </font>
                </div>
                <Divider className={styles.divider} />
                <div className={styles.namebox}>
                  <font className={styles.part}>Lab Manager</font>
                  <font className={styles.name}>
                    &ensp;&ensp;&ensp;&ensp;{t("contact-labmanager")}
                  </font>
                </div>
                <br />
                <div className={styles.content}>
                  <font>
                    ktw3388@dongguk.edu
                    <br />
                    02-2290-1426
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
                    href="http://hri.dongguk.edu"
                    className={styles.link}
                  >
                    http://hri.dongguk.edu
                  </a>
                </div>
                <div className={styles.content}>
                  <font>
                    {t("contact-addr-1")} <br />
                    {t("contact-addr-2")}
                    <br />
                    02-2290-1426
                  </font>
                </div>
              </Col>
            </>
          </Row>
        </Paper>
      </div>
    </div>
  );
}

export default Contact;
