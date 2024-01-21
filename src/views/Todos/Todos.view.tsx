import { Button, Input, Flex, Space, Checkbox } from 'antd';
import Card from 'antd/es/card/Card';
import { DeleteTwoTone } from '@ant-design/icons';

import { TaskTitle } from './components';
import { TodosViewProps } from './Todos.decl';

function TodosView({
  deleteTask,
  toggleTask,
  updateTask,
  todos,
  isAddDisabled,
  handleOnAddTask,
  task,
  setTask
}: TodosViewProps) {
  return (
    <Flex gap="middle" vertical>
      <Space.Compact style={{ width: '100%' }}>
        <Input value={task} onChange={evt => setTask(evt.target.value)} data-testid="add-input" />
        <Button type="primary" onClick={handleOnAddTask} disabled={isAddDisabled}>
          Add
        </Button>
      </Space.Compact>
      <Flex gap="middle" vertical wrap="wrap" data-testid="list">
        {todos.map(todo => (
          <Card hoverable size="small" key={todo.id} data-testid={`card-${todo.id}`}>
            <Flex gap="middle" vertical={false} justify="space-between">
              <Checkbox
                checked={todo.done}
                onClick={() => toggleTask(todo.id)}
                name="mark-as-done"
              />
              <TaskTitle todo={todo} updateTask={updateTask} />
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

export default TodosView;
