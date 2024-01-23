import AppRoutes from './router';
import { ErrorBoundary } from './pages';
import { Flex } from './style/components';

const iphone12 = {
  w: '390px',
  h: '844px'
};

function App() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      backgroundColor="lightGrey"
      alignItems="center"
      justifyContent="center"
    >
      <Flex {...iphone12} backgroundColor="white" padding="14" scroll="block">
        <ErrorBoundary>
          <AppRoutes />
        </ErrorBoundary>
      </Flex>
    </Flex>
  );
}

export default App;
