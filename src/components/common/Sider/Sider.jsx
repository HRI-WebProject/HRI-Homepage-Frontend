import React, { Fragment, useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import { useHistory } from "react-router";
import styles from "@sider/Sider.module.css";

function Sider({ selected_key }) {
  const [currentURL, setCurrentURL] = useState(window.location.pathname);
  const [key, setKey] = useState(currentURL.substr(1, currentURL.length));
  const history = useHistory();
  const { Sider } = Layout;
  const movePage = (url) => {
    history.push(url);
  };

  const renderSwitch = (param) => {
    switch (param) {
      case "Members":
        return (
          <>
            <Menu.Item key="members" onClick={() => movePage("/members")}>
              구성원
            </Menu.Item>
            <Menu.Item key="alumni" onClick={() => movePage("/alumni")}>
              졸업생
            </Menu.Item>
          </>
        );
      case "Professor":
        return (
          <>
            <Menu.Item key="professor" onClick={() => movePage("/professor")}>
              교수진
            </Menu.Item>
          </>
        );
      case "Board":
        return (
          <>
            <Menu.Item key="board" onClick={() => movePage("/board")}>
              소식
            </Menu.Item>
            <Menu.Item key="activity" onClick={() => movePage("/activity")}>
              활동
            </Menu.Item>
          </>
        );
    }
  };

  useEffect(() => {
    setCurrentURL(window.location.pathname);
    setKey(currentURL.substr(1, currentURL.length));
    console.log(currentURL.substr(1, currentURL.length));
  }, []);

  return (
    <div className={styles.sider}>
      <Sider trigger={null} width={120}>
        <Menu
          defaultSelectedKeys={key}
          mode="inline"
          style={{ backgroundColor: "#f5f5f5", height: "500px" }}
        >
          <Fragment>{renderSwitch(selected_key)}</Fragment>
        </Menu>
      </Sider>
    </div>
  );
}

export default Sider;
