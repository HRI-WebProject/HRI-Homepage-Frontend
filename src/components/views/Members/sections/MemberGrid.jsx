import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";
import { Row, Col } from "antd";
import styles from "@members/Members.module.css";
function MemberGrid({ memberData, col_size }) {
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });
  return (
    <>
      <Row gutter={[16, 16]}>
        {memberData.map((item, idx) => (
          <Col span={col_size} key={idx}>
            <Paper
              sx={{
                p: 2,
                margin: "20px 10px auto",
                flexGrow: 1,
              }}
            >
              <Grid container spacing={1}>
                <Grid item>
                  <ButtonBase sx={{ width: 128, height: 128 }}>
                    <Img alt="photo" src={item.img} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="body1" component="div">
                        <b>{item.name}</b>
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        <font className={styles.hashtag}>#</font>{" "}
                        {item.research}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        paddingTop="6%"
                      >
                        {item.email}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default MemberGrid;
