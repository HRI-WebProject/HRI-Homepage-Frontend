import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Form, Input, Button, Checkbox } from "antd";
import styles from "./Login.module.css";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../redux/actions/user_action";
import { useTranslation } from "react-i18next";

function Login(props) {
  const { t, i18n } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1100px)",
  });

  const onFinish = (e) => {
    let variables = {
      username: e.username,
      password: e.password,
    };

    dispatch(loginUser(variables))
      .then((res) => {
        if (res.payload.status === "OK") {
          props.history.push("/");
          sessionStorage.setItem("isLogin", true);
        }
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          alert("아이디, 비밀번호를 확인하세요.");
        } else if (error.request) {
          console.log(error.request);
          alert("서버 응답이 없습니다.");
        } else {
          console.log("Error", error.message);
          alert("오류가 발생했습니다. 다시 시도하시기 바랍니다.");
        }
        window.location.reload();
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
            <div>* {t("login-page-message")}</div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
