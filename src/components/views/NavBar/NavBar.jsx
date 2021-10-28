import React, { useEffect } from "react";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import styles from "@navbar/NavBar.module.css";
import { useHistory } from "react-router";
import { PageHeader } from "antd";

const { Header } = Layout;

function NavBar(props) {
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
    if (url === "/") {
    }
  };

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
              {new Array(7).fill(null).map((_, index) => {
                const key = index + 1;
                return (
                  <Menu.Item
                    key={key}
                    onClick={() => movePage(path[index])}
                  >{`${categories[index]}`}</Menu.Item>
                );
              })}
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
