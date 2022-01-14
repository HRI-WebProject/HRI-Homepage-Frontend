import React, { useEffect } from "react";
import axios from "axios";
import { Col, Card, Button, Form, Input } from "antd";

function EquipmentEditCard({ currentId }) {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    let id = currentId + "";
    axios
      .put(`/admin/researchEquipment/${id}`, values)
      .then((res) => {
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
      .get("/researchEquipment")
      .then((res) => {
        if (res.status === 200) {
          let tmp = res.data.data.filter(function (item, idx) {
            return item.id === parseInt(currentId);
          });
          tmp &&
            form.setFieldsValue({
              name: tmp[0].name,
              engName: tmp[0].engName,
              photo: tmp[0].photo,
            });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

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
            </Form.Item>
          </div>
        </Form>
      </Card>
    </Col>
  );
}

export default EquipmentEditCard;
