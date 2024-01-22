import { useState } from 'react';

import { useTodos } from 'src/context';

import TodosView from './Todos.view';

function Todos() {
  const { addTask, deleteTask, toggleTask, updateTask, todos } = useTodos();

  const [task, setTask] = useState<string>('');

  const isAddDisabled = !task.trim();

  const handleOnAddTask = () => {
    addTask(task);
    setTask('');
  };

  return (
    <TodosView
      {...{
        addTask,
        deleteTask,
        toggleTask,
        updateTask,
        todos,
        isAddDisabled,
        handleOnAddTask,
        task,
        setTask
      }}
    />
  );
}

export default Todos;
