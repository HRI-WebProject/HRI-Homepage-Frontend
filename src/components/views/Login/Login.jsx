import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Form, Input, Button, Checkbox } from "antd";
import { loginUser } from "@actions/user_action";
import { withRouter } from "react-router-dom";
import styles from "@login/Login.module.css";
import { useHistory } from "react-router";

function Login(props) {
  const history = useHistory();
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1100px)",
  });

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

  return (
    <div className={styles.container}>
      <div className={styles.loginForm}>
        <Form
          name="basic"
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
            className={styles.input_box}
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
            className={styles.input_box}
          >
            <Input.Password value={userPassword} />
          </Form.Item>
          <div className={styles.submit}>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.submitBtn}
            >
              Submit
            </Button>
            <div>* 관리자 계정으로만 로그인이 가능합니다.</div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
