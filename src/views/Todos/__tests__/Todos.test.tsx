import { test, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Todos from '../Todos.container';

import * as useTodosContext from '../../../context/TodosContext/useTodos';

const renderTodos = () => {
  return render(<Todos />);
};

describe('Todos', () => {
  const addTask = vi.fn(),
    deleteTask = vi.fn(),
    toggleTask = vi.fn(),
    updateTask = vi.fn();

  beforeEach(() => {
    vi.spyOn(useTodosContext, 'useTodos').mockImplementation(() => ({
      addTask,
      deleteTask,
      toggleTask,
      updateTask,
      todos: [
        { id: '1', task: 'Task 1', done: false },
        { id: '2', task: 'Task 2', done: true }
      ]
    }));
  });

  afterEach(() => {
    cleanup();
  });

  test('Should render todo list', () => {
    renderTodos();
    expect(screen.getByText('Task 1')).toBeVisible();
    expect(screen.getByText('Task 2')).toBeVisible();
  });

  test('Should render one todo list checked and one not checked', () => {
    renderTodos();

    const card1 = screen.getByTestId('card-1');
    const card2 = screen.getByTestId('card-2');

    const checkbox1 = within(card1).getByRole('checkbox');
    const checkbox2 = within(card2).getByRole('checkbox');

    expect(checkbox1).not.toBeChecked();
    expect(checkbox2).toBeChecked();
  });

  test('Should call add a todo', async () => {
    renderTodos();
    const addInput: HTMLInputElement = screen.getByTestId('add-input');
    const task = 'learn react';
    await userEvent.type(addInput, task);

    const addButton = screen.getByRole('button', {
      name: /add/i
    });

    await userEvent.click(addButton);

    expect(addTask).toHaveBeenCalledWith(task);
  });

  test('Should call delete a todo', async () => {
    renderTodos();
    const card = screen.getByTestId('card-1');
    const deleteButton = within(card).getByRole('button', {
      name: /delete/i
    });
    await userEvent.click(deleteButton);

    expect(deleteTask).toHaveBeenCalledWith('1');
  });

  test('Should call toggleTask', async () => {
    renderTodos();
    const card = screen.getByTestId('card-1');
    const checkbox = within(card).getByRole('checkbox');

    await userEvent.click(checkbox);

    expect(toggleTask).toHaveBeenCalledWith('1');
  });
});
