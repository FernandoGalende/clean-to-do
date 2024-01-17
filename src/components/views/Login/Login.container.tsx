import { useState } from "react";

import { Button, Input, Flex, Form } from "antd";

const initialState = {
  user: "",
  password: "",
};

function LoginForm() {
  const [data, setData] = useState<{ user: string; password: string }>(
    initialState
  );

  const handleUserOnChange = (evt: React.FormEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, user: evt.currentTarget.value }));
  };

  const handlePWDOnChange = (evt: React.FormEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, password: evt.currentTarget.value }));
  };

  const handleOnSubmit = () => console.log(data);

  return (
    <Flex vertical>
      <h1>Login</h1>
      <Form onFinish={handleOnSubmit}>
        <label>
          <span className="visually-hidden">Email:</span>
          <Input
            aria-label="Email"
            autoComplete="off"
            name="email"
            onChange={handleUserOnChange}
            placeholder="Email"
            required
            type="email"
            value={data.user}
          />
        </label>
        <label>
          <span className="visually-hidden">Password:</span>
          <Input
            aria-label="Password"
            autoComplete="off"
            name="password"
            onChange={handlePWDOnChange}
            placeholder="Password"
            required
            type="password"
            value={data.password}
          />
        </label>
        <Button htmlType="submit" aria-label="Login">
          Login
        </Button>
      </Form>
    </Flex>
  );
}

export default LoginForm;
