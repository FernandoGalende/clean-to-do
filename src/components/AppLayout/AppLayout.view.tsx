import { Flex } from 'src/style/components';

import { Author } from 'src/components';

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex w="80vw" h="100vh" maxWidth="330" alignItems="center" justifyContent="center">
      {children}
      <Author />
    </Flex>
  );
}

export default AppLayout;
