import { getItem } from '..';

describe('Storage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should set and get item', () => {
    const session = 'abc123';
    localStorage.setItem('access_token', session);

    expect(getItem('access_token')).toBe(session);
  });

  test('should remove item', () => {
    const session = 'abc123';

    localStorage.setItem('access_token', session);
    expect(getItem('access_token')).toBe(session);

    localStorage.removeItem('access_token');
    expect(getItem('access_token')).toBeFalsy();
  });
});
