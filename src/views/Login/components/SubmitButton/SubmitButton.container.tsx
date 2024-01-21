import { useEffect, useState } from 'react';
import { Form } from 'antd';

import SubmitButtonView from './SubmitButton.view';
import { SubmitButtonProps } from './SubmitButton.decl';

function SubmitButton({ form, error, loading }: SubmitButtonProps) {
  const [submittable, setSubmittable] = useState(false);
  const values = Form.useWatch([], form); // Watch all values

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

  return <SubmitButtonView {...{ submittable, error, loading }} />;
}

export default SubmitButton;
