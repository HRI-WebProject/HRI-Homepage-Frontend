import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router";
import { useSelector } from "react-redux";
import styles from "../../Notice/Notice.module.css";
import { Paper } from "@mui/material";
import TitleBar from "../../../../common/TitleBar/TitleBar";
import TopMenu from "../../../../common/TopMenu/TopMenu";
import { Form, Input, Row, Col, Button } from "antd";

function ActivityEdit() {
  const history = useHistory();
  const location = useLocation();
  const currentId = location.state.id;
  const account = useSelector((state) => state.user.loginSuccess);
  const [isLogged, setIsLogged] = useState(false);
  const [form] = Form.useForm();
  const [activityDetail, setActivityDetail] = useState();

  const movePage = (url) => {
    history.push(url);
  };

  const moveBack = () => {
    if (
      window.confirm("변경 사항이 저장되지 않습니다. 뒤로 가시겠습니까?") ===
      true
    ) {
      history.push("/board/activity");
    }
  };

  const onFinish = (values) => {
    values.boardType = "ACTIVITY";
    axios
      .put(`/api/admin/board/${currentId}`, values)
      .then((res) => {
        if (res.status === 200) {
          alert("수정 완료되었습니다.");
          movePage("/board/activity");
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
        .get(`/api/board/${currentId}`)
        .then((res) => {
          if (res.status === 200) {
            let tmp = res.data.data;
            setActivityDetail(res.data.data);
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
    <div>
      <TitleBar title="activity" category="Board" />
      <div className={styles.container}>
        <TopMenu selected_key="Board" />
        <Paper elevation={0} square className={styles.paper}>
          {activityDetail && (
            <Form
              labelCol={{ span: 2 }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              form={form}
              style={{ paddingRight: "40px" }}
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
                  <tr>
                    <th className={styles.table_th_2}>
                      {" "}
                      <Form.Item
                        label="작성자"
                        name="author"
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
                    <td className={styles.table_td_2}>
                      <Form.Item label="내용" name="content">
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
    </div>
  );
}

export default ActivityEdit;
