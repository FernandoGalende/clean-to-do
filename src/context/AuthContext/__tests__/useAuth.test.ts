import { renderHook, act, cleanup } from '@testing-library/react';
import { test, vi } from 'vitest';

import { AuthProvider, useAuth } from '../useAuth';

vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual('react-router-dom');
  return {
    ...mod,
    useNavigate: () => vi.fn()
  };
});

describe('useAuth', () => {
  afterEach(() => {
    cleanup();
  });

  test('Should returns the context values', () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider // Wrap the hook with context provider
    });

    // Access the context values from the hook
    expect(result.current.isAuthenticated).toEqual(false);
    expect(result.current.loading).toEqual(false);
    expect(result.current.error).toEqual(false);

    expect(typeof result.current.login).toBe('function');
    expect(typeof result.current.logout).toBe('function');
  });

  test('Should returns isAuthenticated true after login and false after logout', async () => {
    const { result, rerender } = renderHook(() => useAuth(), {
      wrapper: AuthProvider // Wrap the hook with context provider
    });

    await act(async () => {
      await result.current.login({ email: 'fake@email.com', password: 'xxxxx' });
    });

    rerender();

    expect(result.current.isAuthenticated).toEqual(true);
    expect(result.current.loading).toEqual(false);
    expect(result.current.error).toEqual(false);

    act(() => {
      result.current.logout();
    });

    rerender();

    expect(result.current.isAuthenticated).toBeFalsy();
    expect(result.current.loading).toEqual(false);
    expect(result.current.error).toEqual(false);
  });
});
