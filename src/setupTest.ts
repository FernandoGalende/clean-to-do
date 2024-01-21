// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

class LocalStorage {
  store: Record<string, string> = {};

  setItem = (key: string, val: string) => {
    let newValue;

    try {
      // try parse to check if "val" has already been stringified
      // by the "set()" functions of /storage folder
      const parsedValue = JSON.parse(val);
      newValue = JSON.stringify(parsedValue);
    } catch (error) {
      newValue = JSON.stringify(val);
    }

    this.store[key] = newValue;
  };

  getItem = (key: string) => this.store[key];

  removeItem = (key: string) => {
    delete this.store[key];
  };

  clear = () => {
    this.store = {};
  };
}

const localStorage = new LocalStorage();

Object.defineProperty(window, 'localStorage', {
  value: localStorage,
  writable: true
});
