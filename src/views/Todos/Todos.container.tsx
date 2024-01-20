import { useState } from 'react';
import { Button, Input, Flex, Space, Checkbox } from 'antd';
import Card from 'antd/es/card/Card';
import { DeleteTwoTone } from '@ant-design/icons';

import { useTodos } from 'src/context/TodosContext/useTodos';
import TaskTitle from './components/TaskText/TaskText.container';

function Home() {
  const { addTask, deleteTask, toggleTask, todos } = useTodos();
  const [task, setTask] = useState<string>('');

  const isAddDisabled = !task.trim();

  const handleOnAddTask = () => {
    addTask(task);
    setTask('');
  };

  return (
    <Flex gap="middle" vertical>
      <Space.Compact style={{ width: '100%' }}>
        <Input value={task} onChange={evt => setTask(evt.target.value)} data-testid="add-input" />
        <Button type="primary" onClick={handleOnAddTask} disabled={isAddDisabled}>
          Add
        </Button>
      </Space.Compact>
      <Flex gap="middle" vertical>
        {todos.map(todo => (
          <Card hoverable size="small" key={todo.id}>
            <Flex gap="middle" vertical={false} justify="space-between">
              <Checkbox
                checked={todo.done}
                onClick={() => toggleTask(todo.id)}
                name="mark-as-done"
              />
              <TaskTitle todo={todo} />
              <Flex gap="middle" vertical={false}>
                <Button
                  shape="circle"
                  icon={<DeleteTwoTone />}
                  onClick={() => deleteTask(todo.id)}
                />
              </Flex>
            </Flex>
          </Card>
        ))}
      </Flex>
    </Flex>
  );
}

export default Home;
