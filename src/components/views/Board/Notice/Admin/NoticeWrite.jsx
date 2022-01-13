import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router";
import { useSelector } from "react-redux";
import styles from "@notice/Notice.module.css";
import { Paper } from "@mui/material";
import TitleBar from "@titlebar/TitleBar";
import TopMenu from "@topmenu/TopMenu";
import { Form, Input, Row, Col, Button } from "antd";
import ListIcon from "@material-ui/icons/List";

function NoticeWrite() {
  const history = useHistory();
  const location = useLocation();
  const [boardDetail, setBoardDetail] = useState();
  const account = useSelector((state) => state.user.loginSuccess);
  const [isLogged, setIsLogged] = useState(false);
  const [form] = Form.useForm();

  const movePage = (url) => {
    history.push(url);
  };

  const onFinish = (values) => {
    values.boardType = "NOTICE";
    values.boardType &&
      axios
        .post("/admin/board", values)
        .then((res) => {
          if (res.status === 200) {
            alert("게시글 등록이 완료되었습니다.");
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

  const data = [
    {
      type: "prev",
      title: "Ant Design Title 1",
    },
    {
      type: "next",
      title: "Ant Design Title 2",
    },
  ];

  useEffect(() => {
    if (account && account.status === "OK") setIsLogged(true);
    form.setFieldsValue({
      author: "administrator",
      boardType: "NOTICE",
    });
  }, []);

  return (
    <div className={styles.container}>
      <TitleBar title="소식" />
      <TopMenu selected_key="Board" />
      <Paper className={styles.paper}>
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
                  <Button type="text" onClick={() => movePage("/board/notice")}>
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
      </Paper>
    </div>
  );
}

export default NoticeWrite;
