import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import styles from "../../Members/Members.module.css";
import TitleBar from "../../../common/TitleBar/TitleBar";
import { Form, Input, Button, Col, Row, Radio, Switch } from "antd";
import { Paper } from "@mui/material";

function AlumniWrite() {
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
      .post("/admin/members", values)
      .then((res) => {
        if (res.status === 200) {
          alert("구성원 등록이 완료되었습니다.");
          movePage("/members");
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
      <TitleBar title="alumni" category="Members" />
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
                  message: "필수 입력 항목입니다.",
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
              label="학위"
              name="degree"
              rules={[
                {
                  required: true,
                  message: "필수 입력 항목입니다.",
                },
              ]}
            >
              <Radio.Group>
                <Radio.Button value="PHD">PHD</Radio.Button>
                <Radio.Button value="MASTER">MASTER</Radio.Button>
                <Radio.Button value="BACHELOR">BACHELOR</Radio.Button>
                {/* <Radio.Button value="UNDERGRADUATE">UNDERGRADUATE</Radio.Button> */}
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label="졸업 여부"
              name="graduate"
              rules={[
                {
                  required: true,
                  message: "필수 입력 항목입니다.",
                },
              ]}
            >
              <Switch checkedChildren="졸업" unCheckedChildren="재학" />
            </Form.Item>
            <hr className={styles.hr_tag} />
            <Form.Item
              label="연구분야"
              name="researchArea"
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
              label="이메일"
              name="email"
              rules={[
                {
                  required: true,
                  message: "필수 입력 항목입니다.",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Row>
              <Col span={12}>
                {" "}
                <div style={{ paddingLeft: "10%" }}>
                  <Button type="text" onClick={() => movePage("/members")}>
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

export default AlumniWrite;
