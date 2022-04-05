import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import { Col, Card, Button, Form, Input } from "antd";
import { Paper, Divider } from "@mui/material";
import styles from "../Contact.module.css";
import { useTranslation } from "react-i18next";

function EditCard({ value }) {
  const { t, i18n } = useTranslation();
  const [colSize, setColSize] = useState();
  const [form] = Form.useForm();

  const isSmallScreen = useMediaQuery({
    query: "(max-width: 900px)",
  });

  const onFinish = (values) => {
    axios
      .put(`/api/admin/contact/1`, values)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert("수정완료되었습니다.");
          window.location.reload();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    axios
      .get("/api/contact")
      .then((res) => {
        if (res.status === 200) {
          let tmp = res.data.data;
          tmp &&
            form.setFieldsValue({
              professorName: tmp[0].professorName,
              professorEmail: tmp[0].professorEmail,
              professorPhone: tmp[0].professorPhone,
              labManagerName: tmp[0].labManagerName,
              labManagerEmail: tmp[0].labManagerEmail,
              labManagerPhone: tmp[0].labManagerPhone,
              officeLocation: tmp[0].officeLocation,
              officePhone: tmp[0].officePhone,
            });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (isSmallScreen) setColSize(24);
    else setColSize(12);
  });

  return (
    <div>
      <div className={styles.namebox}>
        <Form
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          form={form}
        >
          <div className={styles.edit_part}>Professor</div>
          <br />
          <Form.Item
            label="이름"
            name="professorName"
            rules={[
              {
                required: true,
                message: "필수 입력 항목입니다.",
              },
            ]}
          >
            <Input size="small" />
          </Form.Item>
          <Form.Item
            label="이메일"
            name="professorEmail"
            rules={[
              {
                required: true,
                message: "필수 입력 항목입니다.",
              },
            ]}
          >
            <Input size="small" />
          </Form.Item>
          <Form.Item
            label="전화번호"
            name="professorPhone"
            rules={[
              {
                required: true,
                message: "필수 입력 항목입니다.",
              },
            ]}
          >
            <Input size="small" />
          </Form.Item>
          <div>&nbsp;</div>
          <Divider className={styles.divider} />
          <div style={{ fontSize: "0.5em" }}>&nbsp;</div>
          <div className={styles.edit_part}>Lab Manager</div>
          <div style={{ fontSize: "0.5em" }}>&nbsp;</div>
          <Form.Item
            label="이름"
            name="labManagerName"
            rules={[
              {
                required: true,
                message: "필수 입력 항목입니다.",
              },
            ]}
          >
            <Input size="small" />
          </Form.Item>
          <Form.Item
            label="이메일"
            name="labManagerEmail"
            rules={[
              {
                required: true,
                message: "필수 입력 항목입니다.",
              },
            ]}
          >
            <Input size="small" />
          </Form.Item>
          <Form.Item
            label="전화번호"
            name="labManagerPhone"
            rules={[
              {
                required: true,
                message: "필수 입력 항목입니다.",
              },
            ]}
          >
            <Input size="small" />
          </Form.Item>
          <Divider className={styles.divider} />
          <div style={{ fontSize: "0.5em" }}>&nbsp;</div>
          <div className={styles.edit_part}>Office</div>
          <div style={{ fontSize: "0.5em" }}>&nbsp;</div>
          <Form.Item
            label="주소"
            name="officeLocation"
            rules={[
              {
                required: true,
                message: "필수 입력 항목입니다.",
              },
            ]}
          >
            <Input size="small" />
          </Form.Item>
          <Form.Item
            label="전화번호"
            name="officePhone"
            rules={[
              {
                required: true,
                message: "필수 입력 항목입니다.",
              },
            ]}
          >
            <Input size="small" />
          </Form.Item>
          <div
            style={{
              textAlign: "right",
              marginRight: "-21%",
            }}
          >
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default EditCard;
