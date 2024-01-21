import { ProtectedRouteViewProps } from './ProtectedRoute.decl';

import { Flex } from 'src/style/components';
import { Row, Button, Col } from 'src/components';

function ProtectedRouteView({ children, logout }: ProtectedRouteViewProps) {
  return (
    <Flex flexDirection="column">
      <Row justify="end">
        <Button type="text" onClick={logout}>
          Logout
        </Button>
      </Row>
      <Col span={24}>{children}</Col>
    </Flex>
  );
}

export default ProtectedRouteView;
