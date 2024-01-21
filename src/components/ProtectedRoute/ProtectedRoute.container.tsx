import { Navigate } from 'react-router-dom';

import { useAuth } from 'src/context';

import ProtectedRouteView from './ProtectedRoute.view';

// This component is used to protect routes that require authentication
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <ProtectedRouteView
      {...{
        children,
        logout
      }}
    />
  );
}

export default ProtectedRoute;
