import { Row, Col, Button, Flex } from 'antd';
import { ProtectedRouteViewProps } from './ProtectedRoute.decl';

function ProtectedRouteView({ children, logout }: ProtectedRouteViewProps) {
  return (
    <Flex gap="middle" vertical>
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
