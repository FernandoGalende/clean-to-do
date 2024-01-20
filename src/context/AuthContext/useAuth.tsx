import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as api from 'src/api';
import { Credentials } from 'src/declarations/Auth';
import { TODOS, LOGIN } from 'src/router/paths';
import { clearSessionStorage, getAccessToken, setAccessToken } from 'src/storage/auth';
import { AuthProviderProps, ProviderType } from './useAuth.decl';

const defaultState: ProviderType = {
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
  loading: false,
  error: false
};

const AuthContext = createContext(defaultState);

// Putting this here only executes once
const isAuthenticated = !!getAccessToken();

export const AuthProvider = ({ children }: AuthProviderProps) => {
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
          throw new Error('Request failed');
        }

        setAccessToken(res.access_token);
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
    clearSessionStorage();
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
    [loading, error, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
