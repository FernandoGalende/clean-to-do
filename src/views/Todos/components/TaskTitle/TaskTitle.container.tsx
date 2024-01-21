import { useState } from 'react';
import { Button, Flex, Typography } from 'antd';
import { EditTwoTone } from '@ant-design/icons';

import { TaskTitleProps } from './TaskTitle.decl';
import TaskTitleEditor from '../TaskTitleEditor/TaskTitleEditor.view';

function TaskTitle({ todo, updateTask }: TaskTitleProps) {
  const [update, setUpdateTask] = useState(todo.task);
  const [isEditing, setEditing] = useState<boolean>(false);

  const handleUpdateTask = () => {
    setEditing(false);
    updateTask({ ...todo, task: update });
  };

  if (isEditing) return <TaskTitleEditor {...{ update, setUpdateTask, handleUpdateTask }} />;

  return (
    <Flex style={{ width: '100%' }} justify="space-between">
      <Typography.Text delete={todo.done}>{todo.task}</Typography.Text>
      <Button shape="circle" icon={<EditTwoTone />} onClick={() => setEditing(true)} />
    </Flex>
  );
}

export default TaskTitle;
