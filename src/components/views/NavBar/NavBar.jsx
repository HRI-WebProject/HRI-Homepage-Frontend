import React, { useState, useEffect } from "react";
import { Menu, Dropdown, Select, Button } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import styles from "@navbar/NavBar.module.css";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { clearUser } from "@actions/user_action";

function NavBar() {
  const account = useSelector((state) => state.user.loginSuccess);
  const [isLogged, setIsLogged] = useState(false);
  const [page, setPage] = useState("home");
  const [isTop, setIsTop] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
  const [scrollLocation, setScrollLocation] = useState(
    document.documentElement.scrollTop
  );

  const listener = (e) => {
    setScrollLocation();
    if (document.documentElement.scrollTop === 0) {
      setIsTop(true);
    } else setIsTop(false);
  };

  const categories = [
    "Research",
    "Professor",
    "Members",
    "Publications",
    "Projects",
    "Board",
    "Contact",
  ];
  const path = [
    "/",
    "/research/researchArea",
    "/professor",
    "/members",
    "/publications/journal",
    "/projects",
    "/board/notice",
    "/contact",
  ];

  const language_menu = (
    <Menu>
      <Menu.Item style={{ width: "100px" }} key="ko">
        <div style={{ fontSize: "1.1em" }}>한국어</div>
      </Menu.Item>
      <Menu.Item>
        <div style={{ fontSize: "1.1em" }} key="en">
          English
        </div>
      </Menu.Item>
    </Menu>
  );

  const movePage = (url, idx) => {
    history.push(url);
    setPage(categories[idx]);
  };

  const handleLogout = () => {
    localStorage.clear();
    dispatch(clearUser());
    window.location.reload();
  };

  useEffect(() => {
    if (account && account.status === "OK") setIsLogged(true);
    var url_idx = path.findIndex((value) => value === window.location.pathname);
    if (url_idx === 0) setPage(categories[url_idx - 1]);
  }, []);

  useEffect(() => {
    if (account && account.status === "OK") setIsLogged(true);
  }, [account]);

  useEffect(() => {
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
              href="http://www.dongguk.ac.kr
          "
            >
              동국대학교
            </a>
          </span>
          <span className={styles.bar}>|</span>
          {isLogged === true && (
            <span className={styles.header_menu} onClick={handleLogout}>
              로그아웃
            </span>
          )}
          {isLogged === false && (
            <span
              className={styles.header_menu}
              onClick={() => movePage("/login")}
            >
              로그인
            </span>
          )}
        </div>
        {isTop ? (
          <div className={styles.navbar_top}>
            <img
              className={styles.logo}
              src="/assets/logo/logo.png"
              onClick={() => movePage("/")}
            />
            <div className={styles.menu}>
              {categories.map((submenu, idx) => {
                return (
                  <Button
                    type="text"
                    key={idx + 1}
                    className={styles.menu_btn}
                    onClick={() => movePage(path[idx + 1], idx)}
                  >
                    <div className={styles.menu_title}>{submenu}</div>
                  </Button>
                );
              })}
            </div>
            <Dropdown
              overlay={language_menu}
              placement="bottomCenter"
              className={styles.dropdown}
            >
              <div className={styles.language_select}>
                <GlobalOutlined />
              </div>
            </Dropdown>
          </div>
        ) : (
          <div className={styles.navbar}>
            <img
              className={styles.logo}
              src="/assets/logo/logo.png"
              onClick={() => movePage("/")}
            />
            <div className={styles.menu}>
              {categories.map((submenu, idx) => {
                return (
                  <Button
                    type="text"
                    key={idx + 1}
                    className={styles.menu_btn}
                    onClick={() => movePage(path[idx + 1], idx)}
                  >
                    <div className={styles.menu_title}>{submenu}</div>
                  </Button>
                );
              })}
            </div>
            <Dropdown
              overlay={language_menu}
              placement="bottomCenter"
              className={styles.dropdown}
            >
              <div className={styles.language_select}>
                <GlobalOutlined />
              </div>
            </Dropdown>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
