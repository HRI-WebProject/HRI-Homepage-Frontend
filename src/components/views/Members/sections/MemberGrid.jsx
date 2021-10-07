import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";
import { Row, Col } from "antd";

function MemberGrid({ memberData }) {
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  return (
    <>
      <Row gutter={[16, 16]}>
        {memberData.map((item) => (
          <Col span={12}>
            <Paper
              sx={{
                p: 2,
                margin: "20px 10px auto",
                maxWidth: 500,
                flexGrow: 1,
              }}
            >
              <Grid container spacing={1}>
                <Grid item>
                  <ButtonBase sx={{ width: 128, height: 128 }}>
                    <Img alt="photo" src="/static/images/grid/complex.jpg" />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        Name (English Name)
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Degree
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Email
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