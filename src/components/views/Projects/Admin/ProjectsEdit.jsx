import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import styles from "../Projects.module.css";
import TitleBar from "../../../common/TitleBar/TitleBar";
import { Form, Input, Button, Col, Row, Switch } from "antd";
import { Paper } from "@mui/material";

function ProjectsEdit() {
  const history = useHistory();
  const location = useLocation();
  const currentId = location.state.id;
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
    let id = currentId + "";
    id &&
      axios
        .put(`/api/admin/projects/${id}`, values)
        .then((res) => {
          if (res.status === 200) {
            alert("수정완료되었습니다.");
            movePage("/projects");
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
      history.push("/projects");
    }
  };

  useEffect(() => {
    if (account && account.status === "OK") setIsLogged(true);

    axios
      .get("/api/projects")
      .then((res) => {
        if (res.status === 200) {
          let tmp = res.data.data.filter(function (item, idx) {
            return item.id === location.state.id;
          });
          tmp &&
            form.setFieldsValue({
              topic: tmp[0].topic,
              subTopic: tmp[0].subTopic,
              onGoing: tmp[0].onGoing,
              photo: tmp[0].photo,
              detail1: tmp[0].detail1,
              detail2: tmp[0].detail2,
              detail3: tmp[0].detail3,
              detail4: tmp[0].detail4,
              detail5: tmp[0].detail5,
            });
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("/api/en/projects")
      .then((res) => {
        if (res.status === 200) {
          let tmp = res.data.data.filter(function (item, idx) {
            return item.id === location.state.id;
          });
          tmp &&
            form.setFieldsValue({
              engTopic: tmp[0].engTopic,
              engSubTopic: tmp[0].engSubTopic,
              onGoing: tmp[0].onGoing,
              engDetail1: tmp[0].engDetail1,
              engDetail2: tmp[0].engDetail2,
              engDetail3: tmp[0].engDetail3,
              engDetail4: tmp[0].engDetail4,
              engDetail5: tmp[0].engDetail5,
            });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <TitleBar title="projects" category="Projects" />
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
              <Input.TextArea rows={2} maxLength={255} />
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
              <Input.TextArea rows={2} maxLength={255} />
            </Form.Item>
            <Form.Item
              label="종료 여부"
              name="onGoing"
              rules={[
                {
                  required: true,
                  message: "필수 입력 항목입니다.",
                },
              ]}
              valuePropName="checked"
            >
              <Switch checkedChildren="종료" unCheckedChildren="진행 중" />
            </Form.Item>
            <Form.Item
              label="사진 URL"
              name="photo"
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
        </Paper>
      </div>
    </div>
  );
}

export default ProjectsEdit;
