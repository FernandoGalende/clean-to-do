import { Button } from 'src/components';
import { SubmitButtonViewProps } from './SubmitButton.decl';

function SubmitButtonView({ submittable, error, loading }: SubmitButtonViewProps) {
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable || error} loading={loading}>
      Login
    </Button>
  );
}

export default SubmitButtonView;
