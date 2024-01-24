import { FormInstance } from 'antd';

export interface SubmitButtonViewProps {
  submittable: boolean;
  error: boolean;
  loading: boolean;
}

export interface SubmitButtonProps {
  form: FormInstance;
  error: boolean;
  loading: boolean;
}
