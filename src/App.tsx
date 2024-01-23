import AppRoutes from './router';
import { ErrorBoundary } from './pages';
import { Box, Flex } from './style/components';
import { ThemeProvider } from '@xstyled/styled-components';
import { defaultTheme } from './style/theme/theme';

const iphoneXR = {
  w: '390px',
  h: '844px'
};

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box w="100vw" h="100vh">
        <Flex {...iphoneXR} backgroundColor="white" padding="14" scroll="block">
          <ErrorBoundary>
            <AppRoutes />
          </ErrorBoundary>
        </Flex>
      </Box>
    </ThemeProvider>
  );
}

export default App;
