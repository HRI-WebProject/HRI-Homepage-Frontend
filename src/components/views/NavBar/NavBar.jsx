import React, { useState, useEffect } from "react";
import { Layout, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import styles from "@navbar/NavBar.module.css";
import { useHistory } from "react-router";
import { PageHeader } from "antd";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";

const { Header } = Layout;

function NavBar(props) {
  const [account, setAccount] = useState("user");
  const history = useHistory();
  const categories = [
    "Research Area",
    "Professor",
    "Members",
    "Publicatons",
    "Projects",
    "Board",
    "Contact",
  ];
  const path = [
    "/research-area",
    "/professor",
    "/members",
    "/publications",
    "/projects",
    "/board",
    "/contact",
  ];
  const movePage = (url) => {
    history.push(url);
  };

  const menu_default = (
    <Menu>
      <Menu.Item key="12" onClick={() => movePage("/login")}>
        <LoginIcon className={styles.subitem_icon} />
        Login
      </Menu.Item>
    </Menu>
  );

  const menu = (
    <Menu>
      <Menu.Item key="12">
        <LogoutIcon className={styles.subitem_icon} />
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <div className={styles.header}>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <img
            className={styles.logo}
            src="/assets/logo.png"
            onClick={() => movePage("/")}
          />
          <div className={styles.menu}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["0"]}>
              {new Array(7).fill(null).map((_, idx) => {
                return (
                  <Menu.Item
                    key={idx + 1}
                    onClick={() => movePage(path[idx])}
                  >{`${categories[idx]}`}</Menu.Item>
                );
              })}
              {account === "user" && (
                <Dropdown
                  overlay={menu_default}
                  trigger={["click"]}
                  className={styles.dropdown}
                >
                  <div
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Settings <DownOutlined />
                  </div>
                </Dropdown>
              )}
              {account === "admin" && (
                <Dropdown
                  overlay={menu}
                  trigger={["click"]}
                  className={styles.dropdown}
                >
                  <div
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    <AccountCircleIcon />
                    &nbsp;&nbsp;Admin <DownOutlined />
                  </div>
                </Dropdown>
              )}
            </Menu>
          </div>
        </Header>
        {/* {currentURI[currentURI.length - 1] !== "" && (
          <PageHeader
            className={styles.site_page_header}
            onBack={() => window.history.back()}
            title="Title"
            subTitle="This is a subtitle"
          />
        )} */}
      </div>
    </>
  );
}

export default NavBar;

// import React, { useState } from "react";
// import styles from "@navbar/NavBar.module.css";
// import { useHistory } from "react-router";
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   NavbarText,
// } from "reactstrap";

// function NavBar(props) {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   const history = useHistory();
//   const categories = [
//     "Research Area",
//     "Professor",
//     "Members",
//     "Publicatons",
//     "Projects",
//     "Board",
//     "Contact",
//   ];
//   const path = [
//     "/research-area",
//     "/professor",
//     "/members",
//     "/publications",
//     "/projects",
//     "/board",
//     "/contact",
//   ];
//   const movePage = (url) => {
//     history.push(url);
//     if (url === "/") {
//     }
//   };

//   return (
//     <>
//       <Navbar light expand="md" className={styles.navbar}>
//         <NavbarBrand href="/">reactstrap</NavbarBrand>
//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className="mr-auto" navbar>
//             <NavItem>
//               <NavLink href="/components/">Components</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="https://github.com/reactstrap/reactstrap">
//                 GitHub
//               </NavLink>
//             </NavItem>
//             <UncontrolledDropdown nav inNavbar>
//               <DropdownToggle nav caret>
//                 Options
//               </DropdownToggle>
//               <DropdownMenu right>
//                 <DropdownItem>Option 1</DropdownItem>
//                 <DropdownItem>Option 2</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem>Reset</DropdownItem>
//               </DropdownMenu>
//             </UncontrolledDropdown>
//           </Nav>
//           <NavbarText>Simple Text</NavbarText>
//         </Collapse>
//       </Navbar>
//     </>
//   );
// }

// export default NavBar;
