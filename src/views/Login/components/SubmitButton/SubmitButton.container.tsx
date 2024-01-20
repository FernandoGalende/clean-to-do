import { useEffect, useState } from 'react';
import { FormInstance, Button, Form } from 'antd';

type SubmitButtonProps = { form: FormInstance; error: boolean; loading: boolean };

const SubmitButton = ({ form, error, loading }: SubmitButtonProps) => {
  const [submittable, setSubmittable] = useState(false);

  // Watch all values
  const values = Form.useWatch([], form);

  useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setSubmittable(true);
      },
      () => {
        setSubmittable(false);
      }
    );
  }, [values, form]);

  return (
    <Button type="primary" htmlType="submit" disabled={!submittable || error} loading={loading}>
      Submit
    </Button>
  );
};

export default SubmitButton;
