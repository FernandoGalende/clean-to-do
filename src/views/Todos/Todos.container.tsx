import { useState } from 'react';
import { Button, Input, Flex, Space, Checkbox } from 'antd';
import Card from 'antd/es/card/Card';
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';

import { useTodos } from 'src/context/TodosContext/useTodos';
import TaskTitle from './components/TaskText/TaskText.container';

function Home() {
  const { addTask, deleteTask, toggleTask, updateTask, todos } = useTodos();
  const [task, setTask] = useState<string>('');
  const [isEditing, setEditing] = useState<boolean>(false);
  const isAddDisabled = !task.trim();

  const handleOnAddTask = () => {
    addTask(task);
    setTask('');
  };

  const handleOnUpdateTask = (todo: Todo) => {
    setEditing(false);
    updateTask(todo);
  };

  return (
    <Flex gap="middle" vertical>
      <Space.Compact style={{ width: '100%' }}>
        <Input value={task} onChange={evt => setTask(evt.target.value)} />
        <Button type="primary" onClick={handleOnAddTask} disabled={isAddDisabled}>
          Add
        </Button>
      </Space.Compact>
      <Flex gap="middle" vertical>
        {todos.map(todo => (
          <Card hoverable size="small" key={todo.id}>
            <Flex gap="middle" vertical={false} justify="space-between">
              <Checkbox checked={todo.done} onClick={() => toggleTask(todo.id)} />
              <TaskTitle todo={todo} onUpdateTask={handleOnUpdateTask} isEditing={isEditing} />
              <Flex gap="middle" vertical={false}>
                <EditTwoTone onClick={() => setEditing(true)} />
                <DeleteTwoTone onClick={() => deleteTask(todo.id)} />
              </Flex>
            </Flex>
          </Card>
        ))}
      </Flex>
    </Flex>
  );
}

export default Home;
