import { useState } from 'react';

import { useTodos } from 'src/context';

import TodosView from './Todos.view';

function Todos() {
  const { addTask } = useTodos();

  const [task, setTask] = useState<string>('');

  const isAddDisabled = !task.trim();

  const handleOnAddTask = () => {
    addTask(task);
    setTask('');
  };

  const handleKeyPress = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key !== 'Enter') return;
    handleOnAddTask();
  };

  return (
    <TodosView
      {...{
        isAddDisabled,
        handleOnAddTask,
        handleKeyPress,
        task,
        setTask
      }}
    />
  );
}

export default Todos;
