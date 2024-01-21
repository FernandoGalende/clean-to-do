import { FormInstance } from 'antd';

export type SubmitButtonViewProps = { submittable: boolean; error: boolean; loading: boolean };

export type SubmitButtonProps = { form: FormInstance; error: boolean; loading: boolean };
