import React, { useState } from "react";
import styles from "@publications/Publications.module.css";
import TitleBar from "@titlebar/TitleBar";
import { Paper, Typography } from "@mui/material";
import { paperData } from "@publications/sections/PublicationsData";
import { Timeline, Radio } from "antd";

function Publications() {
  const [mode, setMode] = useState("left");

  return (
    <>
      <div className={styles.container}>
        <TitleBar title="출판" />
        <Paper>
          <div className={styles.contents}>
            <Typography variant="h5" paddingTop="1%" paddingBottom="1%">
              <b>Recent Publications</b>
            </Typography>
            <Typography paddingBottom="1%">
              {paperData.map((item, i) => (
                <div key={item.idx}>
                  <Typography variant="body1" paddingBottom="0.7%">
                    <font style={{ color: "#2f5597" }}>
                      <b>[{item.idx}]</b>
                    </font>
                    {item.content}
                  </Typography>
                </div>
              ))}
            </Typography>
          </div>
        </Paper>
      </div>
    </>
  );
}

export default Publications;
