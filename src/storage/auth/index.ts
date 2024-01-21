import { getItem, setItem, removeItem } from '..';

export const setAccessToken = (accessToken: string) => {
  setItem('access_token', accessToken);
};

export const getAccessToken = () => getItem('access_token');

export const clearSessionStorage = () => {
  removeItem('access_token');
};
