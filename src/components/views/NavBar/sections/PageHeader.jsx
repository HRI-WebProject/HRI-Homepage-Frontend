import React from "react";
import styles from "@navbar/NavBar.module.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { RightOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";

function PageHeader({ page }) {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      home
    </Link>,
    <Typography key="2" variant="body2" color="text.primary">
      {page}
    </Typography>,
  ];
  return (
    <div className={styles.site_page_header}>
      <div className={styles.header_contents}>
        <Breadcrumbs
          separator={<RightOutlined />}
          aria-label="breadcrumb"
          fontSize="small"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <div className={styles.title}>{page}</div>
      </div>
    </div>
  );
}
export default PageHeader;
