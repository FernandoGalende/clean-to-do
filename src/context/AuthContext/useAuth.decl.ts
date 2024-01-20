import { Credentials } from 'src/declarations/Auth';

export type ProviderType = {
  login: (credentials: Credentials) => void;
  logout: () => void;
  isAuthenticated: boolean;
  loading: boolean;
  error: boolean;
};

export type AuthProviderProps = {
  children: React.ReactNode;
};
