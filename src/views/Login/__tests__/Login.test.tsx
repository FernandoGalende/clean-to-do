import { test } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// To Test
import Login from '../Login.container';
import { AuthProvider } from 'src/context/AuthContext/useAuth';
import { BrowserRouter } from 'react-router-dom';

const renderLogin = () => {
  return render(
    <BrowserRouter>
      <AuthProvider>
        <Login />
      </AuthProvider>
    </BrowserRouter>
  );
};

describe('Login', () => {
  test('Should validate the login page correctly', async () => {
    renderLogin();
    const email = screen.getByRole('textbox', { name: /email/i });
    const password = screen.getByLabelText(/password/i);
    const login = screen.getByRole('button', { name: /login/i });

    await userEvent.type(email, 'test@example.com');
    await userEvent.type(password, 'password');

    expect(login).toBeEnabled();
  });

  test('Should not validate the login page correctly', async () => {
    renderLogin();
    const email = screen.getByRole('textbox', { name: /email/i });
    const password = screen.getByLabelText(/password/i);
    const login = screen.getByRole('button', { name: /login/i });

    await userEvent.type(email, 'test user');
    await userEvent.type(password, 'password');

    const error = screen.getByText(/Please input your email!/i);

    expect(login).not.toBeEnabled();
    expect(error).toBeVisible();
  });

  test('Should displays loading state during form submission', async () => {
    renderLogin();
    const email = screen.getByRole('textbox', { name: /email/i });
    const password = screen.getByLabelText(/password/i);
    const login = screen.getByRole('button', { name: /login/i });

    await userEvent.type(email, 'test@example.com');
    await userEvent.type(password, 'password');
    await userEvent.click(login);

    await waitFor(() => {
      const loading = screen.getByRole('button', {
        name: /loading login/i
      });
      expect(loading).toBeVisible();
    });
  });
});
