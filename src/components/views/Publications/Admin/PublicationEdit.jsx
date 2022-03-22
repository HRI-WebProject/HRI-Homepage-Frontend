import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import styles from "../../Members/Members.module.css";
import TitleBar from "../../../common/TitleBar/TitleBar";
import { Form, Input, Button, Col, Row, DatePicker } from "antd";
import { Paper } from "@mui/material";
import moment from "moment";

function PublicationEdit() {
  const history = useHistory();
  const location = useLocation();
  const currentId = location.state.id;
  const account = useSelector((state) => state.user.loginSuccess);
  const [isLogged, setIsLogged] = useState(false);
  const [typeValue, setTypeValue] = useState(location.state.value);
  const [typeEnValue, setTypeEnValue] = useState();
  const [publicationData, setPublicationData] = useState();
  const [form] = Form.useForm();
  const { TextArea } = Input;

  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1100px)",
  });

  const movePage = (url) => {
    history.push(url);
  };

  const onFinish = (values) => {
    values.publication_type = typeEnValue;
    let id = currentId + "";
    id &&
      axios
        .put(`/api/admin/publications/${id}`, values)
        .then((res) => {
          if (res.status === 200) {
            alert("수정완료되었습니다.");
            movePage(`/publications/${typeEnValue.toLowerCase()}`);
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
      movePage(`/publications/${typeEnValue.toLowerCase()}`);
    }
  };

  useEffect(() => {
    if (account && account.status === "OK") setIsLogged(true);
    let value = "";
    if (typeValue === "특허") {
      setTypeEnValue("PATENT");
      value = "PATENT";
    } else if (typeValue === "학술지") {
      setTypeEnValue("JOURNAL");
      value = "JOURNAL";
    } else if (typeValue === "학술대회") {
      setTypeEnValue("CONFERENCE");
      value = "CONFERENCE";
    } else if (typeValue === "도서") {
      setTypeEnValue("BOOK");
      value = "BOOK";
    }

    if (location.state.value === "특허") {
      axios
        .get("/api/publications/PATENT")
        .then((res) => {
          if (res.status === 200) {
            let tmp = res.data.data.filter(function (item, idx) {
              return item.id === location.state.id;
            });
            tmp && setPublicationData(tmp[0]);
            tmp && console.log(tmp);
            tmp &&
              form.setFieldsValue({
                topic: tmp[0].topic,
                inventor: tmp[0].inventor,
                fillingNo: tmp[0].fillingNo,
                fillingDate: moment(tmp[0].fillingDate),
                grantedNo: tmp[0].grantedNo,
                grantedDate: moment(tmp[0].grantedDate),
                progress: tmp[0].progress,
                link: tmp[0].link,
                detail: tmp[0].detail,
                publication_type: tmp[0].publication_type,
              });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      value &&
        axios
          .get(`/api/publications/${value}`)
          .then((res) => {
            if (res.status === 200) {
              let tmp = res.data.data.filter(function (item, idx) {
                return item.id === location.state.id;
              });
              tmp && setPublicationData(tmp[0]);
              tmp &&
                form.setFieldsValue({
                  topic: tmp[0].topic,
                  link: tmp[0].link,
                  detail: tmp[0].detail,
                  publication_type: tmp[0].publication_type,
                });
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  }, []);

  return (
    <div>
      <TitleBar title={typeValue} category="Publications" />
      <div className={styles.container}>
        <Paper elevation={0} square className={styles.paper}>
          {publicationData && (
            <Form
              name="basic"
              labelCol={{ span: 3 }}
              wrapperCol={{ span: 20 }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              form={form}
            >
              {typeValue && typeValue !== "특허" && typeValue !== "학술지" && (
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
              {typeValue && typeValue === "학술지" && (
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
                    <TextArea rows={5} showCount maxLength={500} />
                  </Form.Item>
                  <hr className={styles.hr_tag} />
                  <Form.Item label="링크" name="link">
                    <Input />
                  </Form.Item>
                </>
              )}
              {typeValue && typeValue === "특허" && (
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
                    <TextArea rows={2} />
                  </Form.Item>
                  <Form.Item label="발명자" name="inventor">
                    <Input />
                  </Form.Item>
                  <Form.Item label="출원번호" name="fillingNo">
                    <Input />
                  </Form.Item>
                  <Form.Item label="출원일" name="fillingDate">
                    <DatePicker />
                  </Form.Item>
                  <Form.Item label="등록번호" name="grantedNo">
                    <Input />
                  </Form.Item>
                  <Form.Item label="등록일" name="grantedDate">
                    <DatePicker />
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

export default PublicationEdit;
