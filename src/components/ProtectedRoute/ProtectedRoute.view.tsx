import { ProtectedRouteViewProps } from './ProtectedRoute.decl';

import { Flex } from 'src/style/components';
import { Radio } from 'src/components';

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
        <Radio.Button type="text" onClick={logout}>
          Logout
        </Radio.Button>
      </Flex>
      <Flex borderRadius="4">{children}</Flex>
    </Flex>
  );
}

export default ProtectedRouteView;
