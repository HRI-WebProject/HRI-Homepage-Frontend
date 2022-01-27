import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import TitleBar from "../../common/TitleBar/TitleBar";
import styles from "./Members.module.css";
import { Paper } from "@mui/material";
import TopMenu from "../../common/TopMenu/TopMenu";
import { useMediaQuery } from "react-responsive";
import MemberGrid from "./sections/MemberGrid";
import AddButton from "../../common/AddButton/AddButton";
import { useTranslation } from "react-i18next";

function Members() {
  const account = useSelector((state) => state.user.loginSuccess);
  const [isLogged, setIsLogged] = useState(false);
  const [phdMembers, setPhdMembers] = useState(); // 박사
  const [masterMembers, setMasterMembers] = useState(); // 석사
  const [bachelorMembers, setBachelorMembers] = useState(); // 학사
  const [undergraduate, setUndergraduate] = useState(); // 학부생
  const [colSize, setColSize] = useState();
  const { t, i18n } = useTranslation();

  const isSmallScreen = useMediaQuery({
    query: "(max-width: 600px)",
  });

  useEffect(() => {
    if (isSmallScreen) setColSize(24);
    else setColSize(12);
  });

  useEffect(() => {
    if (account && account.status === "OK") setIsLogged(true);
    axios
      .get("/members/PHD")
      .then((res) => {
        if (res.status === 200) {
          let tmp = res.data.data.filter(function (item, idx) {
            return item.graduate === false;
          });
          tmp && setPhdMembers(tmp);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
      .get("/members/MASTER")
      .then((res) => {
        if (res.status === 200) {
          let tmp = res.data.data.filter(function (item, idx) {
            return item.graduate === false;
          });
          tmp && setMasterMembers(tmp);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
      .get("/members/BACHELOR")
      .then((res) => {
        if (res.status === 200) {
          let tmp = res.data.data.filter(function (item, idx) {
            return item.graduate === false;
          });
          tmp && setBachelorMembers(tmp);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <TitleBar title="members" category="Members" />
      <div className={styles.container}>
        <TopMenu selected_key="Members" />
        <Paper elevation={0} square className={styles.paper}>
          {isLogged && <AddButton />}
          <div className={styles.subtitle}>
            <b>{t("phd-course")}</b>
          </div>
          {phdMembers && (
            <MemberGrid
              memberData={phdMembers}
              col_size={colSize}
              degree={t("phd-course")}
              isLogged={isLogged}
            />
          )}
          <hr className={styles.hrline} />
          <div className={styles.subtitle}>
            <b>{t("master-course")}</b>
          </div>
          {masterMembers && (
            <MemberGrid
              memberData={masterMembers}
              col_size={colSize}
              degree={t("master-course")}
              isLogged={isLogged}
            />
          )}
          <hr className={styles.hrline} />
          <div className={styles.subtitle}>
            <b>{t("bachelor-course")}</b>
          </div>
          {bachelorMembers && (
            <MemberGrid
              memberData={bachelorMembers}
              col_size={colSize}
              degree={t("bachelor-course")}
              isLogged={isLogged}
            />
          )}
        </Paper>
      </div>
    </div>
  );
}

export default Members;
