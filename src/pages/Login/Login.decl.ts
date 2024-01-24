import { FormInstance } from 'antd';
import { Credentials } from 'src/declarations/Auth';

export interface LoginViewProps {
  form: FormInstance;
  handleOnSubmit: (credentials: Credentials) => void;
  loading: boolean;
  error: boolean;
}
