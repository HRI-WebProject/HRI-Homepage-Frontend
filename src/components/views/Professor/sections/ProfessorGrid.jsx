import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";
import { Row, Col } from "antd";

function ProfessorGrid({ professorData }) {
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  return (
    <>
      <Row>
        {professorData.map((item) => (
          <Col span={24}>
            <Paper
              sx={{
                p: 2,
                margin: "20px 10px auto",
                maxWidth: 1200,
                flexGrow: 1,
              }}
            >
              <Grid container spacing={1}>
                <Grid item>
                  <ButtonBase sx={{ width: 256, height: 256 }}>
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

export default ProfessorGrid;
