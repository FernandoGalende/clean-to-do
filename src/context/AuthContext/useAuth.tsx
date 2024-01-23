import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as api from 'src/api';
import { Credentials } from 'src/declarations/Auth';
import { TODOS, LOGIN } from 'src/router/paths';

import { AuthProviderProps, ProviderType } from './useAuth.decl';
import { getItem, removeItem, setItem } from 'src/storage';

const defaultState: ProviderType = {
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
  loading: false,
  error: false
};

const AuthContext = createContext(defaultState);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const isAuthenticated = !!getItem('access_token');
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  // call this function when you want to authenticate the user
  const login = useCallback(
    async (credentials: Credentials) => {
      setLoading(true);

      try {
        const res = await api.login(credentials);
        if (!res.ok) {
          setError(true);
          return;
        }
        setItem('access_token', res.access_token);
        navigate(TODOS);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    },
    [navigate]
  );

  // call this function to sign out logged in user
  const logout = useCallback(() => {
    removeItem('todos');
    removeItem('access_token');
    navigate(LOGIN);
  }, [navigate]);

  const value = useMemo(
    () => ({
      login,
      logout,
      isAuthenticated,
      loading,
      error
    }),
    [loading, error, login, logout, isAuthenticated]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
};
