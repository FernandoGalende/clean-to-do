import { Button, Input, Space, Typography } from 'antd';
import { useState } from 'react';
import { TaskDeskProps } from './TaskText.decl';

const TaskTitle = ({ todo, onUpdateTask, isEditing }: TaskDeskProps) => {
  const [update, setUpdateTask] = useState(todo.task);

  if (isEditing) {
    return (
      <Space.Compact style={{ width: '100%' }}>
        <Input value={update} onChange={evt => setUpdateTask(evt.target.value)} />
        <Button type="primary" onClick={() => onUpdateTask({ ...todo, task: update })}>
          Save
        </Button>
      </Space.Compact>
    );
  }

  return <Typography.Text delete={todo.done}>{todo.task}</Typography.Text>;
};

export default TaskTitle;
