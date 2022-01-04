import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import styles from "@professor/Professor.module.css";
import TitleBar from "@titlebar/TitleBar";
import { Form, Input, Button, Col, Row } from "antd";
import { Paper } from "@mui/material";

function ProfessorEdit() {
  const history = useHistory();
  const location = useLocation();
  const currentId = location.state.id;
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
    console.log(values);
    axios
      .put(`/admin/professors/${currentId}`, values)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          alert("교수 등록이 완료되었습니다.");
          movePage("/professor");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const moveBack = () => {
    if (
      window.confirm("변경 사항이 저장되지 않습니다. 뒤로 가시겠습니까?") ===
      true
    ) {
      history.push("/professor");
    }
  };

  useEffect(() => {
    if (account && account.status === "OK") setIsLogged(true);

    axios
      .get("/professors")
      .then((res) => {
        if (res.status === 200) {
          let tmp = res.data.data.filter(function (item, idx) {
            return item.id === location.state.id;
          });
          tmp && setProfessorData(tmp[0]);
          form.setFieldsValue({
            name: tmp[0].name,
            engName: tmp[0].engName,
            photo: tmp[0].photo,
            boldDetail: tmp[0].boldDetail,
            detail: tmp[0].detail,
            email: tmp[0].email,
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <TitleBar title="교수진" />
      <Paper className={styles.paper}>
        {professorData && (
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
              <Input.TextArea rows={2} showCount maxLength={255} />
            </Form.Item>
            <Form.Item label="세부 정보" name="detail">
              <Input.TextArea rows={4} showCount maxLength={255} />
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
            {/* Bottom button set */}
            <Row>
              <Col span={12}>
                {" "}
                <div style={{ paddingLeft: "10%", cursor: "pointer" }}>
                  <Button type="text" onClick={moveBack}>
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
                  </Form.Item>
                </div>
              </Col>
            </Row>
          </Form>
        )}
      </Paper>
    </div>
  );
}

export default ProfessorEdit;
