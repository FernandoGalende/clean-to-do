import { Form } from 'antd';

import { Credentials } from '../../declarations/Auth';

import { useAuth } from 'src/context';
import LoginView from './Login.view';

function Login() {
  const [form] = Form.useForm();
  const { login, loading, error } = useAuth();

  const handleOnSubmit = async (credentials: Credentials) => {
    await login(credentials);
  };

  return <LoginView {...{ form, handleOnSubmit, loading, error }} />;
}

export default Login;
