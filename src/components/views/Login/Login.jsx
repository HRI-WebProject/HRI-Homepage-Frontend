import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { loginUser } from "../../../_actions/user_action";
import { withRouter } from "react-router-dom";
import styles from "./Login.module.css";
import { useHistory } from "react-router";

function Login(props) {
  const history = useHistory();
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const onFinish = (e) => {
    console.log("Success:", e);
    setUserId(e.username);
    setUserPassword(e.password);

    // if (e.username === "admin") {
    //   alert("아이디를 확인하세요.");
    //   window.location.replace("/login");
    // }
    // if (e.password === "1245") {
    //   alert("비밀번호를 확인하세요.");
    //   history.push("/login");
    // }
    history.push("/");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);

    if (userId === "admin") {
      alert("아이디를 확인하세요.");
      history.push("/login");
    }
  };

  useEffect(() => {}, []);

  return (
    <div className={styles.container}>
      <div className={styles.loginForm}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username.",
              },
            ]}
          >
            <Input value={userId} />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password.",
              },
            ]}
          >
            <Input.Password value={userPassword} />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 8,
            }}
          >
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
          * 관리자 계정으로만 로그인이 가능합니다.
        </Form>
      </div>
    </div>
  );
}

export default Login;
