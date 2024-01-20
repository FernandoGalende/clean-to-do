import { Row, Col, Button, Flex } from 'antd';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'src/context/AuthContext/useAuth';

// This component is used to protect routes that require authentication
export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

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
};
