import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import styles from "../Members.module.css";
import TitleBar from "../../../common/TitleBar/TitleBar";
import { Form, Input, Button, Col, Row, Radio, Switch } from "antd";
import { Paper } from "@mui/material";

function MembersEdit() {
  const history = useHistory();
  const location = useLocation();
  const currentId = location.state.id;
  const account = useSelector((state) => state.user.loginSuccess);
  const [isLogged, setIsLogged] = useState(false);
  const [memberData, setMemberData] = useState();
  const [form] = Form.useForm();

  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1100px)",
  });

  const movePage = (url) => {
    history.push(url);
  };

  const onFinish = (values) => {
    axios
      .put(`/admin/members/${currentId}`, values)
      .then((res) => {
        if (res.status === 200) {
          alert("수정완료되었습니다.");
          movePage("/members");
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
      history.push("/members");
    }
  };

  useEffect(() => {
    if (account && account.status === "OK") setIsLogged(true);

    axios
      .get("/members")
      .then((res) => {
        if (res.status === 200) {
          let tmp = res.data.data.filter(function (item, idx) {
            return item.id === location.state.id;
          });
          tmp && setMemberData(tmp[0]);
          form.setFieldsValue({
            name: tmp[0].name,
            engName: tmp[0].engName,
            photo: tmp[0].photo,
            degree: tmp[0].degree,
            graduate: tmp[0].graduate,
            email: tmp[0].email,
            researchArea: tmp[0].researchArea,
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <TitleBar title="구성원" category="Members" />
      <div className={styles.container}>
        <Paper elevation={0} square className={styles.paper}>
          {memberData && (
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
    </div>
  );
}

export default MembersEdit;
