import { Form, Input, Button, Typography } from 'antd';

const { Title } = Typography;

const ForgotPasswordForm: React.FC = () => {
  const onFinish = (values: { email: string }) => {
    console.log('Forgot Password Form Submitted:', values);
  };

  return (
    <Form
      name="forgot-password"
      onFinish={onFinish}
      autoComplete="off"
    >
      <Title level={3}>Forgot Password</Title>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'Please enter a valid email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button
            type="primary"
            htmlType="submit"
            style={{display: 'block', marginLeft: 'auto'}}
        >
          Reset Password
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ForgotPasswordForm;
