import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import styles from "../../Members/Members.module.css";
import TitleBar from "../../../common/TitleBar/TitleBar";
import { Form, Input, Button, Col, Row, Radio, DatePicker } from "antd";
import { Paper } from "@mui/material";

function PublicationWrite() {
  const history = useHistory();
  const location = useLocation();
  const account = useSelector((state) => state.user.loginSuccess);
  const [isLogged, setIsLogged] = useState(false);
  const [show, setShow] = useState(0);
  const [typeValue, setTypeValue] = useState(location.state.value);
  const [form] = Form.useForm();
  const { TextArea } = Input;

  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1100px)",
  });

  const movePage = (url) => {
    history.push(url);
  };

  const onFinish = (values) => {
    axios
      .post("/api/admin/publications", values)
      .then((res) => {
        if (res.status === 200) {
          alert("등록이 완료되었습니다.");
          if (show === "PATENT") movePage("/publications/patent");
          else if (show === "JOURNAL") movePage("/publications/journal");
          else if (show === "CONFERENCE") movePage("/publications/conference");
          else if (show === "BOOK") movePage("/publications/book");
          window.location.reload();
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

  const onClickType = (e) => {
    setShow(e.target.value);
    if (e.target.value === "JOURNAL") setTypeValue("학술지");
    else if (e.target.value === "CONFERENCE") setTypeValue("학술대회");
    else if (e.target.value === "PATENT") setTypeValue("특허");
    else if (e.target.value === "BOOK") setTypeValue("도서");
  };

  useEffect(() => {
    if (account && account.status === "OK") setIsLogged(true);
  }, []);

  return (
    <div>
      <TitleBar title={typeValue} category="Publications" />
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
              label="종류"
              name="publication_type"
              rules={[
                {
                  required: true,
                  message: "필수 입력 항목입니다.",
                },
              ]}
            >
              <Radio.Group onChange={onClickType}>
                <Radio.Button value="JOURNAL">JOURNAL</Radio.Button>
                <Radio.Button value="CONFERENCE">CONFERENCE</Radio.Button>
                <Radio.Button value="PATENT">PATENT</Radio.Button>
                <Radio.Button value="BOOK">BOOK</Radio.Button>
              </Radio.Group>
            </Form.Item>
            {show !== 0 && show !== "PATENT" && (
              <>
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
                  <TextArea rows={2} showCount maxLength={500} />
                </Form.Item>
                <Form.Item label="세부내용" name="detail">
                  <TextArea rows={10} showCount maxLength={1000} />
                </Form.Item>
                <hr className={styles.hr_tag} />
                <Form.Item label="링크" name="link">
                  <Input />
                </Form.Item>
              </>
            )}
            {show !== 0 && show === "PATENT" && (
              <>
                <Form.Item
                  label="제목"
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
                <Form.Item label="발명자" name="inventor">
                  <Input />
                </Form.Item>
                <Form.Item label="출원번호" name="fillingNo">
                  <Input />
                </Form.Item>
                <Form.Item label="출원일" name="fillingDate">
                  <DatePicker format="YYYY-MM-DD" />
                </Form.Item>
                <Form.Item label="등록번호" name="grantedNo">
                  <Input />
                </Form.Item>
                <Form.Item label="등록일" name="grantedDate">
                  <DatePicker format="YYYY-MM-DD" />
                </Form.Item>
                <Form.Item
                  label="진행상황"
                  name="progress"
                  extra="기술이전 / 노하우이전 / 등록 / 소프트웨어등록 / 출원 등"
                >
                  <Input />
                </Form.Item>
              </>
            )}
            <Row>
              <Col span={12}>
                {" "}
                <div style={{ paddingLeft: "10%" }}>
                  <Button
                    type="text"
                    onClick={() => movePage("/publications/journal")}
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

export default PublicationWrite;
