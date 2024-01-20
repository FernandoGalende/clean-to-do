import { createContext, useCallback, useContext, useMemo, useState } from 'react';

import { TodoProviderProps, ProviderType } from './useTodos.decl';

const defaultState: ProviderType = {
  addTask: () => {},
  deleteTask: () => {},
  updateTask: () => {},
  toggleTask: () => {},
  todos: []
};

const TodosContext = createContext(defaultState);

export const TodosProvider = ({ children }: TodoProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTask = useCallback((task: string) => {
    const todo = { task, done: false, id: crypto.randomUUID() };
    setTodos(prev => [...prev, todo]);
  }, []);

  const deleteTask = useCallback((id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  const updateTask = useCallback((onUpdateTodo: Todo) => {
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === onUpdateTodo.id) {
          return onUpdateTodo;
        }
        return todo;
      })
    );
  }, []);

  const toggleTask = useCallback((id: string) => {
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      })
    );
  }, []);

  const value = useMemo(
    () => ({ addTask, deleteTask, toggleTask, updateTask, todos }),
    [addTask, todos, deleteTask, toggleTask, updateTask]
  );

  return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>;
};

export const useTodos = () => {
  const context = useContext(TodosContext);

  if (context === undefined) {
    throw new Error('useTodos must be used within a TodosProvider');
  }

  return context;
};
