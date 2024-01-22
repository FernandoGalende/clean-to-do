import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

import { ReactNode } from 'react';
import * as routes from 'src/router/paths';
import GenericErrorView from './Error.view';

const ErrorFallback = () => {
  const handleActionClick = () => {
    // redirection is not possible using react-router because ErrorBoundary component
    // is declared outside of <Router> logic
    window.location.href = routes.LOGIN;
  };

  return <GenericErrorView onClose={handleActionClick} />;
};

const ErrorBoundary = ({ children }: { children: ReactNode }) => {
  const handleError = (error: Error) => console.error(error);

  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback} onError={handleError}>
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;
