import { getAccessToken, setAccessToken, clearSessionStorage } from '..';

describe('Storage - Auth', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('Should set and get item', () => {
    const token = 'xxxxx';
    setAccessToken(token);

    expect(getAccessToken()).toBe(token);
  });

  test('Should remove item', () => {
    const token = 'xxxxx';

    localStorage.setItem('access_token', token);
    expect(getAccessToken()).toBe(token);

    clearSessionStorage();
    expect(getAccessToken()).toBeFalsy();
  });
});
