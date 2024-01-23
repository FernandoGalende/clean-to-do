import { ThemeProvider } from '@xstyled/styled-components';

import AppRoutes from 'src/router';
import { ErrorBoundary } from 'src/pages';
import { Flex } from 'src/style/components';
import { defaultTheme } from 'src/style/theme/theme';
import { Author } from 'src/components';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
        <Flex justifyContent="center">
          <ErrorBoundary>
            <AppRoutes />
            <Author />
          </ErrorBoundary>
        </Flex>
      </Flex>
    </ThemeProvider>
  );
}

export default App;
