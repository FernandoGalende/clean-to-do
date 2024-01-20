import { Form, Input } from 'antd';

import { Credentials } from '../../declarations/Auth';

import { SubmitButton } from './components';
import { useAuth } from 'src/context/AuthContext/useAuth';

function Login() {
  const [form] = Form.useForm();
  const { login, loading, error } = useAuth();

  const handleOnSubmit = async (credentials: Credentials) => {
    await login(credentials);
  };

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={handleOnSubmit}
      autoComplete="off"
    >
      <Form.Item<Credentials>
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<Credentials>
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <SubmitButton {...{ form, loading, error }} />
      </Form.Item>
    </Form>
  );
}

export default Login;
