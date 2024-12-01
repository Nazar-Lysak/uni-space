import type { FormProps } from 'antd';
import { Button, Select, Form, Input, Typography } from 'antd';

const { Title } = Typography;

type FieldType = {
  email?: string;
  password?: string;
  confirmPassword?: string;
  username?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const handleSelect = (value: string) => {
  console.log(`selected ${value}`);
};

const SignUpForm: React.FC = () => {
  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      preserve={false}
    >
      <Title level={3}>Sign Up</Title>
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Please input your email!' },
          { type: 'email', message: 'Please enter a valid email address!' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[
          { required: true, message: 'Please input your password!' },
          { min: 6, message: 'Password must be at least 6 characters!' },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item<FieldType>
        label="Confirm Password"
        name="confirmPassword"
        dependencies={['password']}
        rules={[
          { required: true, message: 'Please confirm your password!' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Passwords do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Select
        defaultValue="UK"
        onChange={handleSelect}
        options={[
          { value: 'UK', label: 'uk' },
          { value: 'ES', label: 'es' },
          { value: 'PT', label: 'pt' },
        ]}
        rules={[
          { required: true },
        ]}
      />

      <Form.Item label={null}>
        <Button
          type="primary"
          htmlType="submit"
          style={{display: 'block', marginLeft: 'auto'}}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUpForm;