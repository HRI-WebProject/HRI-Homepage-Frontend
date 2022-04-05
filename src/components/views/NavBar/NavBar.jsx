import React, { useState, useEffect } from "react";
import { Menu, Dropdown, Button } from "antd";
import { GlobalOutlined, MenuOutlined } from "@ant-design/icons";
import styles from "./NavBar.module.css";
import { useMediaQuery } from "react-responsive";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../../redux/actions/user_action";
import { useTranslation, withTranslation } from "react-i18next";
import { imageData } from "../../../assets/images";

function NavBar() {
  const account = useSelector((state) => state.user.loginSuccess);
  const [isLogged, setIsLogged] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [navbarColor, setNavbarColor] = useState();
  const history = useHistory();
  const dispatch = useDispatch();
  const [scrollLocation, setScrollLocation] = useState(
    document.documentElement.scrollTop
  );

  const { t, i18n } = useTranslation();

  const isSmallScreen = useMediaQuery({
    query: "(max-width: 900px)",
  });

  const listener = (e) => {
    setScrollLocation();
    if (document.documentElement.scrollTop === 0) {
      setIsTop(true);
    } else setIsTop(false);
  };

  const category_set = [
    {
      title: "Research",
      path: "/research/researchArea",
    },
    {
      title: "Professor",
      path: "/professor",
    },
    {
      title: "Members",
      path: "/members",
    },
    {
      title: "Projects",
      path: "/projects",
    },
    {
      title: "Publications",
      path: "/publications/journal",
    },
    {
      title: "Board",
      path: "/board/notice",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    sessionStorage.setItem("lang", lang);
  };

  const language_menu = (
    <Menu>
      <Menu.Item
        style={{ width: "100px", height: "50px" }}
        key="ko"
        onClick={() => changeLanguage("ko")}
      >
        <div style={{ fontSize: "1.1em", textAlign: "center" }}>KOREAN</div>
      </Menu.Item>
      <Menu.Item
        style={{ width: "100px", height: "50px" }}
        key="en"
        onClick={() => changeLanguage("en")}
      >
        <div style={{ fontSize: "1.1em", textAlign: "center" }}>ENGLISH</div>
      </Menu.Item>
    </Menu>
  );

  const menu_select = (
    <Menu>
      {category_set.map((menu, idx) => (
        <Menu.Item
          style={{ width: "200px", height: "50px" }}
          key={menu.title}
          onClick={() => movePage(menu.path)}
        >
          <div style={{ fontSize: "1.2em" }}>{menu.title}</div>
        </Menu.Item>
      ))}
    </Menu>
  );

  const movePage = (url, idx) => {
    history.push(url);
  };

  const handleLogout = () => {
    sessionStorage.clear();
    dispatch(clearUser());
    window.location.reload();
  };

  useEffect(() => {
    if (account && account.status === "OK") setIsLogged(true);
    let path = category_set.map((a) => a.path);
    var url_idx = path.findIndex((value) => value === window.location.pathname);
  }, []);

  useEffect(() => {
    if (account && account.status === "OK") setIsLogged(true);
  }, [account]);

  useEffect(() => {
    if (isTop) setNavbarColor("#0b0a29");
    else setNavbarColor("#000209");
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return (
    <div>
      <div className={styles.outer}>
        <div className={styles.header}>
          <span className={styles.header_menu} onClick={() => movePage("/")}>
            HOME
          </span>
          <span className={styles.bar}>|</span>
          <span className={styles.header_menu}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={t("dgu-website")}
            >
              {t("dgu")}
            </a>
          </span>
          <span className={styles.bar}>|</span>
          {isLogged === true && (
            <span className={styles.header_menu} onClick={handleLogout}>
              {t("logout")}
            </span>
          )}
          {isLogged === false && (
            <span
              className={styles.header_menu}
              onClick={() => movePage("/login")}
            >
              {t("login")}
            </span>
          )}
        </div>
        <>
          <div
            className={styles.navbar}
            style={{ backgroundColor: navbarColor }}
          >
            <>
              <img
                className={styles.logo}
                src={imageData.logo}
                onClick={() => movePage("/")}
              />
              <div className={styles.menu}>
                {category_set.map((item, idx) => {
                  return (
                    <Button
                      type="text"
                      key={idx + 1}
                      className={styles.menu_btn}
                      onClick={() => movePage(category_set[idx].path, idx)}
                    >
                      <div className={styles.menu_title}>{item.title}</div>
                    </Button>
                  );
                })}
              </div>
            </>
          </div>
          {isSmallScreen ? (
            <Dropdown overlay={menu_select} placement="bottomCenter">
              <MenuOutlined
                className={styles.menu_select}
                style={{ color: "white" }}
              />
            </Dropdown>
          ) : (
            <></>
          )}
          <Dropdown overlay={language_menu} placement="bottomCenter">
            <div className={styles.language_select}>
              <GlobalOutlined />
            </div>
          </Dropdown>
        </>
      </div>
    </div>
  );
}

export default withTranslation()(NavBar);
