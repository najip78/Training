import React, { useState } from 'react';
import { Form, Input, Button, DatePicker, Upload, message, Select, Typography, Card } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, UploadOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Option } = Select;

export default function EmployeeRegistration() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values: any) => {
    setLoading(true);
    // Mock form submission
    setTimeout(() => {
      setLoading(false);
      message.success('Employee registered successfully!');
      form.resetFields();
    }, 1000);
  };

  const uploadProps = {
    beforeUpload: (file) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG files!');
      }
      return isJpgOrPng || Upload.LIST_IGNORE;
    },
    maxCount: 1,
  };

  return (
    <Card style={{ maxWidth: 500, margin: 'auto', marginTop: 50, padding: 20 , backgroundColor: '#f5f5f5' }}>
      <Title level={3} style={{ textAlign: 'center' }}>Employee Registration</Title>
      <Form
        form={form}
        name="register"
        layout="vertical"
        onFinish={onFinish}
        style={{ width: '100%' }}
      >
        <Form.Item
          name="name"
          label="Full Name"
          rules={[{ required: true, message: 'Please enter your full name!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="John Doe" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email Address"
          rules={[
            { required: true, message: 'Please enter your email!' },
            { type: 'email', message: 'Please enter a valid email!' },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="john.doe@example.com" />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[{ required: true, message: 'Please enter your phone number!' }]}
        >
          <Input prefix={<PhoneOutlined />} placeholder="+123456789" />
        </Form.Item>

        <Form.Item
          name="dob"
          label="Date of Birth"
          rules={[{ required: true, message: 'Please select your date of birth!' }]}
        >
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          name="department"
          label="Department"
          rules={[{ required: true, message: 'Please select your department!' }]}
        >
          <Select placeholder="Select a department">
            <Option value="hr">Human Resources</Option>
            <Option value="engineering">Engineering</Option>
            <Option value="marketing">Marketing</Option>
            <Option value="sales">Sales</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="profilePicture"
          label="Profile Picture"
          valuePropName="fileList"
        >
          <Upload {...uploadProps} listType="picture">
            <Button icon={<UploadOutlined />}>Upload Profile Picture</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            style={{ width: '100%', marginTop: 10 }}
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
