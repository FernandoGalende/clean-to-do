import AppRoutes from './router';
import { ErrorBoundary } from './pages';

function App() {
  return (
    <ErrorBoundary>
      <AppRoutes />;
    </ErrorBoundary>
  );
}

export default App;
