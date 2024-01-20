import { useState } from 'react';
import { Button, Flex, Input, Space, Typography } from 'antd';
import { EditTwoTone } from '@ant-design/icons';

import { TaskDeskProps } from './TaskText.decl';
import { useTodos } from 'src/context/TodosContext/useTodos';

const TaskTitle = ({ todo }: TaskDeskProps) => {
  const { updateTask } = useTodos();
  const [update, setUpdateTask] = useState(todo.task);
  const [isEditing, setEditing] = useState<boolean>(false);

  const handleUpdateTask = () => {
    setEditing(false);
    updateTask({ ...todo, task: update });
  };

  if (isEditing) {
    return (
      <Space.Compact style={{ width: '100%' }}>
        <Input value={update} onChange={evt => setUpdateTask(evt.target.value)} />
        <Button type="primary" onClick={handleUpdateTask}>
          Save
        </Button>
      </Space.Compact>
    );
  }

  return (
    <Flex style={{ width: '100%' }} justify="space-between">
      <Typography.Text delete={todo.done}>{todo.task}</Typography.Text>
      <EditTwoTone onClick={() => setEditing(true)} />
    </Flex>
  );
};

export default TaskTitle;
