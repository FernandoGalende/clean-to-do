import { useState } from 'react';
import { Button, EditTwoTone, Typography } from 'src/components';

import { TaskTitleProps } from './TaskTitle.decl';
import TaskTitleEditor from '../TaskTitleEditor/TaskTitleEditor.view';
import { Flex } from 'src/style/components';

function TaskTitle({ todo, updateTask }: TaskTitleProps) {
  const [update, setUpdateTask] = useState(todo.task);
  const [isEditing, setEditing] = useState<boolean>(false);

  const handleUpdateTask = () => {
    setEditing(false);
    updateTask({ ...todo, task: update });
  };

  if (isEditing) return <TaskTitleEditor {...{ update, setUpdateTask, handleUpdateTask }} />;

  return (
    <Flex w="100%" alignItems="center" justifyContent="space-between" px="2">
      <Typography.Text delete={todo.done}>{todo.task}</Typography.Text>
      <Button shape="circle" icon={<EditTwoTone />} onClick={() => setEditing(true)} />
    </Flex>
  );
}

export default TaskTitle;
