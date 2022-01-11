import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import styles from "@researcharea/ResearchArea.module.css";
import TitleBar from "@titlebar/TitleBar";
import { Form, Input, Button, Col, Row } from "antd";
import { Paper } from "@mui/material";

function ResearchAreaEdit() {
  const history = useHistory();
  const location = useLocation();
  const currentId = location.state.id;
  const account = useSelector((state) => state.user.loginSuccess);
  const [isLogged, setIsLogged] = useState(false);
  const [researchData, setResearchData] = useState();
  const [form] = Form.useForm();

  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1100px)",
  });

  const movePage = (url) => {
    history.push(url);
  };

  const onFinish = (values) => {
    axios
      .put(`/admin/researchArea/${currentId + ""}`, values)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          alert("수정되었습니다.");
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
    axios
      .get("/researchArea")
      .then((res) => {
        if (res.status === 200) {
          let tmp = res.data.data.filter(function (item, idx) {
            return item.id === location.state.id;
          });
          tmp && setResearchData(tmp[0]);
          form.setFieldsValue({
            name: tmp[0].name,
            engName: tmp[0].engName,
            photo: tmp[0].photo,
            engDetail: tmp[0].engDetail,
            detail: tmp[0].detail,
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <TitleBar title="연구 분야" />
      <Paper className={styles.paper}>
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
            label="설명"
            name="detail"
            rules={[
              {
                required: true,
                message: "필수 입력 항목입니다.",
              },
            ]}
          >
            <Input.TextArea rows={4} showCount maxLength={255} />
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
            <Input.TextArea rows={4} showCount maxLength={255} />
          </Form.Item>
          {/* Bottom button set */}
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
  );
}

export default ResearchAreaEdit;
