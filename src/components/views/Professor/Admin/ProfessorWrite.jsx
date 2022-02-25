import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import styles from "../Professor.module.css";
import TitleBar from "../../../common/TitleBar/TitleBar";
import { Form, Input, Button, Col, Row } from "antd";
import { Paper } from "@mui/material";

function ProfessorWrite() {
  const history = useHistory();
  const account = useSelector((state) => state.user.loginSuccess);
  const [isLogged, setIsLogged] = useState(false);
  const [professorData, setProfessorData] = useState();
  const [form] = Form.useForm();

  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1100px)",
  });

  const movePage = (url) => {
    history.push(url);
  };

  const onFinish = (values) => {
    axios
      .post("/admin/professors", values)
      .then((res) => {
        if (res.status === 200) {
          alert("교수 등록이 완료되었습니다.");
          movePage("/professor");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (account && account.status === "OK") setIsLogged(true);
  }, []);

  return (
    <div>
      <TitleBar title="professor" category="Professor" />
      <div className={styles.container}>
        <Paper elevation={0} square className={styles.paper}>
          <Form
            name="basic"
            labelCol={{ span: 3 }}
            wrapperCol={{ span: 20 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            form={form}
          >
            <Form.Item
              label="이름"
              name="name"
              rules={[
                {
                  required: true,
                  message: "이름은 필수 입력 항목입니다.",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="영문이름"
              name="engName"
              rules={[
                {
                  required: true,
                  message: "영문이름은 필수 입력 항목입니다.",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="사진 URL"
              name="photo"
              extra="이미지 URL 형식으로 작성이 필요합니다."
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="소개"
              name="boldDetail"
              rules={[
                {
                  required: true,
                  message: "소개는 필수 입력 항목입니다.",
                },
              ]}
            >
              <Input.TextArea rows={6} showCount maxLength={500} />
            </Form.Item>
            <Form.Item label="세부 정보" name="detail">
              <Input.TextArea rows={12} showCount maxLength={1000} />
            </Form.Item>
            <hr className={styles.hr_tag} />
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "이메일은 필수 입력 항목입니다.",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Row>
              <Col span={12}>
                {" "}
                <div style={{ paddingLeft: "10%" }}>
                  <Button type="text" onClick={() => movePage("/professor")}>
                    ← Back
                  </Button>
                </div>
              </Col>
              <Col span={12}>
                {" "}
                <div
                  style={{
                    textAlign: "right",
                    marginRight: "-10%",
                  }}
                >
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                    <Button
                      htmlType="button"
                      onClick={onReset}
                      style={{ marginLeft: "10px" }}
                    >
                      Reset
                    </Button>
                  </Form.Item>
                </div>
              </Col>
            </Row>
          </Form>
        </Paper>
      </div>
    </div>
  );
}

export default ProfessorWrite;
