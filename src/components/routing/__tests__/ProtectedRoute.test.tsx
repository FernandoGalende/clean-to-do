import { render, screen } from '@testing-library/react';
import { test, vi } from 'vitest';
import { BrowserRouter as Router } from 'react-router-dom';

import * as useAuthContext from 'src/context';

import { ProtectedRoute } from '../ProtectedRoute';

describe('ProtectedRoute', () => {
  test('Should renders children when authenticated', () => {
    vi.spyOn(useAuthContext, 'useAuth').mockImplementation(() => ({
      login: () => {},
      logout: () => {},
      isAuthenticated: true,
      loading: false,
      error: false
    }));
    render(
      <Router>
        <ProtectedRoute>
          <div data-testid="protected-content">Protected Content</div>
        </ProtectedRoute>
      </Router>
    );

    const protectedContent = screen.getByTestId('protected-content');
    expect(protectedContent).toBeInTheDocument();
  });

  test('Should not renders children when authenticated', () => {
    vi.spyOn(useAuthContext, 'useAuth').mockImplementation(() => ({
      login: () => {},
      logout: () => {},
      isAuthenticated: false,
      loading: false,
      error: false
    }));
    render(
      <Router>
        <ProtectedRoute>
          <div data-testid="protected-content">Protected Content</div>
        </ProtectedRoute>
      </Router>
    );

    const protectedContent = screen.queryByTestId('protected-content');
    expect(protectedContent).not.toBeInTheDocument();
  });
});
