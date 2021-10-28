import React from "react";
import styles from "@publications/Publications.module.css";
import { Paper, Typography } from "@mui/material";
import { paperData } from "@publications/sections/PublicationsData";

function Publications() {
  return (
    <div className={styles.container}>
      <Paper>
        <div className={styles.contents}>
          <Typography variant="h5" paddingTop="1%" paddingBottom="1%">
            <b>Papers</b>
          </Typography>
          <Typography paddingBottom="1%">
            {paperData.map((item, i) => (
              <div key={item.idx}>
                <Typography variant="body1" paddingBottom="0.7%">
                  <font style={{ color: "#2f5597" }}>
                    <b>[{item.idx}]</b>
                  </font>{" "}
                  {item.content}
                </Typography>
              </div>
            ))}
          </Typography>
        </div>
      </Paper>
    </div>
  );
}

export default Publications;
