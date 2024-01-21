import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import routes from './routes';
import { ProtectedRoute } from 'src/components';
import { LOGIN } from './paths';

import { AuthProvider, TodosProvider } from 'src/context';
import { GlobalAppStyle } from 'src/style/Global';

const AppRouter = () => (
  <BrowserRouter>
    <AuthProvider>
      <GlobalAppStyle />
      <Routes>
        <Route path="/" element={<Navigate to={LOGIN} />} />
        {routes.map(({ Component, path, isPrivate }) => {
          let routeElement = <Component />;

          if (isPrivate) {
            routeElement = (
              <TodosProvider>
                <ProtectedRoute>{routeElement}</ProtectedRoute>
              </TodosProvider>
            );
          }

          return <Route key={path} path={path} element={routeElement} />;
        })}
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);

export default AppRouter;
