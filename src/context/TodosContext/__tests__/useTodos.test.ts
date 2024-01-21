import { renderHook, act } from '@testing-library/react';
import { test, vi } from 'vitest';

import { TodosProvider, useTodos } from '../useTodos';

// Mock useNavigate from react-router-dom
vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual('react-router-dom');
  return {
    ...mod,
    useNavigate: () => vi.fn()
  };
});

describe('useTodos', () => {
  test('returns the context values', () => {
    const { result } = renderHook(() => useTodos(), {
      wrapper: TodosProvider // Wrap the hook with context provider
    });

    // Access the context values from the hook
    expect(result.current.todos).toEqual([]);
    expect(typeof result.current.addTask).toBe('function');
    expect(typeof result.current.deleteTask).toBe('function');
    expect(typeof result.current.updateTask).toBe('function');
    expect(typeof result.current.toggleTask).toBe('function');
  });

  test('add, update, toggle, and delete task', () => {
    Object.defineProperty(globalThis, 'crypto', {
      value: {
        randomUUID: () => '1'
      }
    });
    const todo = { task: 'learn react', done: false, id: '1' };
    const updatedTask = 'learn vue';
    const { result } = renderHook(() => useTodos(), {
      wrapper: TodosProvider // Wrap the hook with context provider
    });

    // Add
    act(() => {
      result.current.addTask(todo.task);
    });
    expect(result.current.todos).toEqual([todo]);

    // Update
    act(() => {
      result.current.updateTask({ ...todo, task: updatedTask });
    });
    expect(result.current.todos).toEqual([{ task: 'learn vue', done: false, id: '1' }]);

    // Toggle
    act(() => {
      result.current.toggleTask('1');
    });
    expect(result.current.todos).toEqual([{ task: 'learn vue', done: true, id: '1' }]);

    // Delete
    act(() => {
      result.current.deleteTask(todo.id);
    });
    expect(result.current.todos).toEqual([]);
  });

  test('add two todos with the same task', () => {
    Object.defineProperty(globalThis, 'crypto', {
      value: {
        randomUUID: () => '1'
      }
    });
    const todo = { task: 'learn react', done: false, id: '1' };

    const { result } = renderHook(() => useTodos(), {
      wrapper: TodosProvider // Wrap the hook with context provider
    });

    // Add
    act(() => {
      result.current.addTask(todo.task);
      result.current.addTask(todo.task);
    });
    expect(result.current.todos.length).toEqual(2);
  });
});
