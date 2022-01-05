import React, { Fragment, useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import { useHistory } from "react-router";

function TopMenu({ selected_key }) {
  const [currentURL, setCurrentURL] = useState(window.location.pathname);
  const [key, setKey] = useState();
  const history = useHistory();
  const { Sider } = Layout;
  const movePage = (url) => {
    history.push(url);
  };

  const handleClick = (e) => {
    // console.log(e);
  };

  const renderSwitch = (param) => {
    switch (param) {
      case "ResearchArea":
        return (
          <>
            <Menu.Item
              key="research/researchArea"
              onClick={() => movePage("/research/researchArea")}
            >
              연구 분야
            </Menu.Item>
            <Menu.Item
              key="research/equipments"
              onClick={() => movePage("/research/equipments")}
            >
              연구실 장비
            </Menu.Item>
          </>
        );
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
            <Menu.Item
              key="board/notice"
              onClick={() => movePage("/board/notice")}
            >
              소식
            </Menu.Item>
            <Menu.Item
              key="board/activity"
              onClick={() => movePage("/board/activity")}
            >
              활동
            </Menu.Item>
          </>
        );
      case "Publications":
        return (
          <>
            <Menu.Item
              key="publications/journal"
              onClick={() => movePage("/publications/journal")}
            >
              학술지
            </Menu.Item>
            <Menu.Item
              key="publications/conference"
              onClick={() => movePage("/publications/conference")}
            >
              학술대회
            </Menu.Item>
            <Menu.Item
              key="publications/patent"
              onClick={() => movePage("/publications/patent")}
            >
              특허
            </Menu.Item>
            <Menu.Item
              key="publications/book"
              onClick={() => movePage("/publications/book")}
            >
              도서
            </Menu.Item>
          </>
        );
    }
  };

  useEffect(() => {
    if (currentURL.indexOf("notice") !== -1) setKey("board/notice");
    else if (currentURL.indexOf("activity") !== -1) setKey("board/activity");
    else setKey(currentURL.substr(1, currentURL.length));
  }, []);

  return (
    <div>
      {key && (
        <Menu onClick={handleClick} defaultSelectedKeys={key} mode="horizontal">
          <Fragment>{renderSwitch(selected_key)}</Fragment>
        </Menu>
      )}
    </div>
  );
}

export default TopMenu;
