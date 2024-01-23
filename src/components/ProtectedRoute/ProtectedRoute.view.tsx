import { ProtectedRouteViewProps } from './ProtectedRoute.decl';

import { Flex } from 'src/style/components';
import { Button } from 'src/components';

function ProtectedRouteView({ children, logout }: ProtectedRouteViewProps) {
  return (
    <Flex flexDirection="column">
      <Flex
        backgroundColor="surface-background"
        borderRadius="4"
        position="absolute"
        top="16"
        right="16"
      >
        <Button onClick={logout}>Logout</Button>
      </Flex>
      <Flex borderRadius="4">{children}</Flex>
    </Flex>
  );
}

export default ProtectedRouteView;
