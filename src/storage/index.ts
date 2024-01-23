export const getItem = (key: string) => {
  const item = localStorage.getItem(key);

  if (!item) return;

  return JSON.parse(item);
};

export const setItem = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeItem = (key: string) => {
  localStorage.removeItem(key);
};
