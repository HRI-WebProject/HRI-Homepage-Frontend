import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";
import { Row, Col } from "antd";
import styles from "../Professor.module.css";

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
                flexGrow: 1,
              }}
            >
              <Grid container spacing={1}>
                <Grid item>
                  <ButtonBase sx={{ width: 256, height: 256 }}>
                    <Img alt="photo" src="/images/members/professor.png" />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="h6" component="div">
                        <b>정진우 (Jin-Woo Jung)</b>
                      </Typography>
                      <Typography variant="body2">
                        <b>
                          동국대학교 컴퓨터공학과/인공지능학과 교수,
                          컴퓨터공학과 학과장
                        </b>
                        <br />
                        국제저명학술지(IJFIS) 편집위원장
                      </Typography>
                      <Typography
                        variant="body2"
                        gutterBottom
                        paddingBottom="1.5%"
                      >
                        한국지능시스템학회 이사, 한국공학교육회
                        이사,한국공학교육인증원 CAC 부위원장
                      </Typography>
                      <Typography
                        variant="body2"
                        gutterBottom
                        paddingBottom="1.5%"
                      >
                        <div>
                          한국과학기술원(KAIST) 전기및전자공학과 공학사/공학석사
                          <br />
                          한국과학기술원(KAIST) 전자전산학과 공학박사
                          <br />
                          일본 동경대학교 방문연구원, 미국 Purdue University
                          방문교수
                        </div>
                        <div></div>
                      </Typography>
                      <Typography
                        variant="body2"
                        gutterBottom
                        paddingBottom="1.5%"
                      >
                        국제 저명(SCI급)학술지 게재 50여 편, 학술대회 논문 발표
                        200여 편,특허 등록 20여 건, 기술이전 10여 건
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        paddingBottom="7%"
                      >
                        Research Area
                        <br />
                        <b>컴퓨터 비전 / 모바일 로봇 / 지능시스템응용</b>
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
