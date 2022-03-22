import React from "react";
import axios from "axios";
import { Col, Card, Button, Form, Input } from "antd";

function EquipmentAddCard() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    axios
      .post("/api/admin/researchEquipment", values)
      .then((res) => {
        if (res.status === 200) {
          alert("연구장비 등록이 완료되었습니다.");
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

  return (
    <Col span={6}>
      <Card hoverable style={{ width: 240 }}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 20 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          form={form}
        >
          <Form.Item
            label="이름"
            name="name"
            rules={[
              {
                required: true,
                message: "이름은 필수 입력 항목입니다.",
              },
            ]}
          >
            <Input size="small" />
          </Form.Item>
          <Form.Item
            label="영문명"
            name="engName"
            rules={[
              {
                required: true,
                message: "영문이름은 필수 입력 항목입니다.",
              },
            ]}
          >
            <Input size="small" />
          </Form.Item>
          <Form.Item label="사진 URL" name="photo">
            <Input size="small" />
          </Form.Item>

          <div
            style={{
              textAlign: "right",
              marginRight: "-20%",
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
        </Form>
      </Card>
    </Col>
  );
}

export default EquipmentAddCard;
