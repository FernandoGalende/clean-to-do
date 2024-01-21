import { test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// To Test
import TaskText from '../TaskText.container';

import { TodosProvider } from 'src/context/TodosContext/useTodos';
import { TaskDeskProps } from '../TaskText.decl';

const mockTodo = {
  id: '1',
  task: 'learn react',
  done: false
};

const renderTaskText = (props: TaskDeskProps) => {
  return render(
    <TodosProvider>
      <TaskText {...props} />
    </TodosProvider>
  );
};

describe('TaskTest', () => {
  test('Should edit a task', async () => {
    const updateTask = vi.fn();
    renderTaskText({ todo: mockTodo, updateTask });
    const editButton = screen.getByRole('button', { name: /edit/i });
    await userEvent.click(editButton);

    const editInput = screen.getByTestId('edit-input');
    await userEvent.clear(editInput);
    await userEvent.type(editInput, 'learn vue');

    const saveButton = screen.getByRole('button', { name: /save/i });
    await userEvent.click(saveButton);

    expect(updateTask).toHaveBeenCalledWith({ ...mockTodo, task: 'learn vue' });
  });
});
