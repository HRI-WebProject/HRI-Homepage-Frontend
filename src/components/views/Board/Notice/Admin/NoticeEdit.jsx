import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router";
import { useSelector } from "react-redux";
import styles from "@notice/Notice.module.css";
import { Paper } from "@mui/material";
import TitleBar from "@titlebar/TitleBar";
import TopMenu from "@topmenu/TopMenu";
import { Form, Input, Row, Col, Button } from "antd";
import moment from "moment";
import { ContentPasteOutlined } from "@mui/icons-material";

function NoticeEdit() {
  const history = useHistory();
  const location = useLocation();
  const currentId = location.state.id;
  const account = useSelector((state) => state.user.loginSuccess);
  const [isLogged, setIsLogged] = useState(false);
  const [form] = Form.useForm();
  const [noticeDetail, setNoticeDetail] = useState();

  const movePage = (url) => {
    history.push(url);
  };

  const moveBack = () => {
    if (
      window.confirm("변경 사항이 저장되지 않습니다. 뒤로 가시겠습니까?") ===
      true
    ) {
      history.push("/board/notice");
    }
  };

  const onFinish = (values) => {
    axios
      .put(`/admin/board/${currentId}`, values)
      .then((res) => {
        if (res.status === 200) {
          alert("수정 완료되었습니다.");
          movePage("/board/notice");
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
    currentId &&
      axios
        .get(`/board/${currentId}`)
        .then((res) => {
          if (res.status === 200) {
            let tmp = res.data.data;
            setNoticeDetail(res.data.data);
            tmp &&
              form.setFieldsValue({
                topic: tmp.topic,
                author: tmp.author,
                content: tmp.content,
              });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
  }, []);

  return (
    <div className={styles.container}>
      <TitleBar title="소식" />
      <TopMenu selected_key="Board" />
      <Paper className={styles.paper}>
        {noticeDetail && (
          <Form
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="inline"
            form={form}
          >
            <table className={styles.table_}>
              <thead>
                <tr>
                  <th className={styles.table_th}>
                    {" "}
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
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.table_td_1_write}>
                    <span style={{ paddingRight: "50px" }}>
                      <Form.Item name="author">
                        <b>작성자</b> |
                        <Input
                          style={{ width: "150px", marginLeft: "10px" }}
                          defaultValue="administrator"
                          disabled
                        />
                      </Form.Item>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className={styles.table_td_2}>
                    <Form.Item name="content">
                      <Input.TextArea rows={25} maxLength={2500} showCount />
                    </Form.Item>
                  </td>
                </tr>
              </tbody>
            </table>
            <div style={{ width: "94.5%" }}>
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
            </div>
          </Form>
        )}
      </Paper>
    </div>
  );
}

export default NoticeEdit;
