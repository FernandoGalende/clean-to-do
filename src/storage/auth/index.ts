import { getItem, setItem, removeItem } from '..';

// TODO: Testing
export const setAccessToken = (accessToken: string) => {
  setItem('access_token', accessToken);
};

// TODO: Testing
export const getAccessToken = () => getItem('access_token');

// TODO: Testing
export const clearSessionStorage = () => {
  removeItem('access_token');
};
