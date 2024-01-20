// TODO: Testing
export const getItem = (key: string) => {
  const item = localStorage.getItem(key);

  if (!item) return;

  return JSON.parse(item);
};

// TODO: Testing
export const setItem = (key: string, value: string) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// TODO: Testing
export const removeItem = (key: string) => {
  localStorage.removeItem(key);
};
