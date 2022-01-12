import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Form, Input, Button, Checkbox } from "antd";
import styles from "@login/Login.module.css";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { loginUser } from "@actions/user_action";

function Login(props) {
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
          console.log(res.payload);
          props.history.push("/");
          localStorage.setItem("isLogin", true);
          console.log(localStorage);
        }
      })
      .catch(function (error) {
        if (error.response) {
          // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답함
          console.log(error.response.data);
          alert("아이디, 비밀번호를 확인하세요.");
        } else if (error.request) {
          // 요청이 이루어 졌으나 응답을 받지 못함
          // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
          // Node.js의 http.ClientRequest 인스턴스임
          console.log(error.request);
          alert("서버 응답이 없습니다.");
        } else {
          // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생함
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
            <div>* 관리자 계정으로만 로그인이 가능합니다.</div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
