import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import styles from "@projects/Projects.module.css";
import TitleBar from "@titlebar/TitleBar";
import { Form, Input, Button, Col, Row } from "antd";
import { Paper } from "@mui/material";

function Projectswrite() {
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
      .post("/admin/projects", values)
      .then((res) => {
        if (res.status === 200) {
          alert("프로젝트 등록이 완료되었습니다.");
          movePage("/projects");
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
      <TitleBar title="프로젝트 소개" category="Projects" />
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
              label="주제"
              name="topic"
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
              label="주제 (영문)"
              name="engTopic"
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
              label="소주제"
              name="subTopic"
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
              label="소주제 (영문)"
              name="engSubTopic"
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
              // rules={[
              //   {
              //     required: true,
              //     message: "사진은 필수 입력 항목입니다.",
              //   },
              // ]}
              extra="이미지 URL 형식으로 작성이 필요합니다."
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="설명1"
              name="detail1"
              extra="'설명'은 순서 없는 리스트 형식으로 보여지며 일부 빈칸으로 제출도 가능합니다."
            >
              <Input.TextArea rows={2} maxLength={255} />
            </Form.Item>
            <Form.Item label="설명2" name="detail2">
              <Input.TextArea rows={2} maxLength={255} />
            </Form.Item>
            <Form.Item label="설명3" name="detail3">
              <Input.TextArea rows={2} maxLength={255} />
            </Form.Item>
            <Form.Item label="설명4" name="detail4">
              <Input.TextArea rows={2} maxLength={255} />
            </Form.Item>
            <Form.Item label="설명5" name="detail5">
              <Input.TextArea rows={2} maxLength={255} />
            </Form.Item>
            <Form.Item label="영문 설명1" name="engDetail1">
              <Input.TextArea rows={2} maxLength={255} />
            </Form.Item>
            <Form.Item label="영문 설명2" name="engDetail2">
              <Input.TextArea rows={2} maxLength={255} />
            </Form.Item>
            <Form.Item label="영문 설명3" name="engDetail3">
              <Input.TextArea rows={2} maxLength={255} />
            </Form.Item>
            <Form.Item label="영문 설명4" name="engDetail4">
              <Input.TextArea rows={2} maxLength={255} />
            </Form.Item>
            <Form.Item label="영문 설명5" name="engDetail5">
              <Input.TextArea rows={2} maxLength={255} />
            </Form.Item>

            <Row>
              <Col span={12}>
                <div style={{ paddingLeft: "10%" }}>
                  <Button type="text" onClick={() => movePage("/projects")}>
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

export default Projectswrite;
