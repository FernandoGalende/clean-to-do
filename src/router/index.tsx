import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import routes from './routes';
import { ProtectedRoute } from 'src/components/routing/ProtectedRoute';
import { LOGIN } from './paths';
import { AuthProvider } from 'src/context/AuthContext/useAuth';
import { TodosProvider } from 'src/context/TodosContext/useTodos';

// TODO: Wrap only
const AppRouter = () => (
  <BrowserRouter>
    <AuthProvider>
      <TodosProvider>
        <Routes>
          <Route path="/" element={<Navigate to={LOGIN} />} />
          {routes.map(({ Component, path, isPrivate }) => {
            let routeElement = <Component />;

            if (isPrivate) {
              routeElement = <ProtectedRoute>{routeElement}</ProtectedRoute>;
            }

            return <Route key={path} path={path} element={routeElement} />;
          })}
        </Routes>
      </TodosProvider>
    </AuthProvider>
  </BrowserRouter>
);

export default AppRouter;
