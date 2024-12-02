import { useEffect } from 'react';
import { Button, Select, Form, Input, Typography, FormProps } from 'antd';
import { useMarketList } from '../../../store/store';
import Loader from '@/app/ui/loader/Loader';

const { Title } = Typography;

type FieldType = {
  email?: string;
  password?: string;
  confirmPassword?: string;
  market?: string;
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

  const { marketList, isLoading, error, fetchMarkets } = useMarketList();

  useEffect(() => {
    fetchMarkets(); 
  }, [marketList]);

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
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        name="market" 
        label="Select Market"  
        rules={[{ required: true, message: 'Please select a market!' }]}
      >
        {
          isLoading 
          ? <Loader />
          : (
            <Select
              onChange={handleSelect}
              options={marketList}
            />
          ) 
        }
        
      </Form.Item>      

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