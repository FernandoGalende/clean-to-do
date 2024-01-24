import { Form, Input, Typography } from 'src/components';

import { Credentials } from 'src/declarations/Auth';

import { SubmitButton } from './components';
import { LoginViewProps } from './Login.decl';
import { Box, Flex } from 'src/style/components';

function LoginView({ form, handleOnSubmit, loading, error }: LoginViewProps) {
  return (
    <Flex
      flexDirection="column"
      padding="4"
      backgroundColor="surface-background"
      borderRadius="4"
      h="400"
      w="80vw"
      maxWidth="330"
      gap="10"
    >
      <Typography.Title style={{ textAlign: 'center', fontWeight: 'bold' }}>
        Sparta ToDo
      </Typography.Title>
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
    </Flex>
  );
}

export default LoginView;
