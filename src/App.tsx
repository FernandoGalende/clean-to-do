import { ThemeProvider } from '@xstyled/styled-components';

import AppRoutes from 'src/router';
import { ErrorBoundary } from 'src/pages';
import { defaultTheme } from 'src/style/theme/theme';

import { AppLayout } from './components';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ErrorBoundary>
        <AppLayout>
          <AppRoutes />
        </AppLayout>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
