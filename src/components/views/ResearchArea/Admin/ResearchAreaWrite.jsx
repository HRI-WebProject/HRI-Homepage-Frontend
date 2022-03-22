import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import styles from "../ResearchArea.module.css";
import TitleBar from "../../../common/TitleBar/TitleBar";
import { Form, Input, Button, Col, Row } from "antd";
import { Paper } from "@mui/material";

function ResearchAreaWrite() {
  const history = useHistory();
  const account = useSelector((state) => state.user.loginSuccess);
  const [isLogged, setIsLogged] = useState(false);
  const [form] = Form.useForm();

  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1100px)",
  });

  const movePage = (url) => {
    history.push(url);
  };

  const onFinish = (values) => {
    axios
      .post("/api/admin/researchArea", values)
      .then((res) => {
        if (res.status === 200) {
          alert("연구분야 등록이 완료되었습니다.");
          movePage("/research/researchArea");
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
      <TitleBar title="researchArea" category="Research" />
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
              label="연구분야명"
              name="name"
              rules={[
                {
                  required: true,
                  message: "필수 입력 항목입니다.",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="연구분야 영문명"
              name="engName"
              rules={[
                {
                  required: true,
                  message: "필수 입력 항목입니다.",
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
              label="설명"
              name="detail"
              rules={[
                {
                  required: true,
                  message: "필수 입력 항목입니다.",
                },
              ]}
            >
              <Input.TextArea rows={10} showCount maxLength={1000} />
            </Form.Item>
            <Form.Item
              label="영문 설명"
              name="engDetail"
              rules={[
                {
                  required: true,
                  message: "필수 입력 항목입니다.",
                },
              ]}
            >
              <Input.TextArea rows={10} showCount maxLength={1000} />
            </Form.Item>

            <Row>
              <Col span={12}>
                <div style={{ paddingLeft: "10%" }}>
                  <Button
                    type="text"
                    onClick={() => movePage("/research/researchArea")}
                  >
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

export default ResearchAreaWrite;
