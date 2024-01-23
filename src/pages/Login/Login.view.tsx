import { Form, Input, Typography } from 'src/components';

import { Credentials } from 'src/declarations/Auth';

import { SubmitButton } from './components';
import { LoginViewProps } from './Login.decl';
import { Box } from 'src/style/components';

function LoginView({ form, handleOnSubmit, loading, error }: LoginViewProps) {
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
        rules={[
          {
            required: true,
            message: 'Please input your email!',
            type: 'email'
          }
        ]}
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
      <Box mb="2">
        {error && <Typography.Text type="danger">{'Invalid credentials'}</Typography.Text>}
      </Box>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <SubmitButton {...{ form, loading, error }} />
      </Form.Item>
    </Form>
  );
}

export default LoginView;
