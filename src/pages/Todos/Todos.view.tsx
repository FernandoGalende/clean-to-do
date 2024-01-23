import { TaskTitle } from './components';
import { TodosViewProps } from './Todos.decl';
import { Button, Input, Space, Checkbox, Card, DeleteTwoTone } from 'src/components';
import { Flex } from 'src/style/components';

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
    <Flex flexDirection="column">
      <Space.Compact style={{ width: '100%' }}>
        <Input value={task} onChange={evt => setTask(evt.target.value)} data-testid="add-input" />
        <Button type="primary" onClick={handleOnAddTask} disabled={isAddDisabled}>
          Add
        </Button>
      </Space.Compact>
      <Flex data-testid="list" flexDirection="column" gap="2" padding="2">
        {todos.map(todo => (
          <Card
            style={{ width: '100%' }}
            hoverable
            size="small"
            key={todo.id}
            data-testid={`card-${todo.id}`}
          >
            <Flex w="100%" justifyContent="space-between">
              <Checkbox
                checked={todo.done}
                onClick={() => toggleTask(todo.id)}
                name="mark-as-done"
              />
              <TaskTitle todo={todo} updateTask={updateTask} />
              <Button shape="circle" icon={<DeleteTwoTone />} onClick={() => deleteTask(todo.id)} />
            </Flex>
          </Card>
        ))}
      </Flex>
    </Flex>
  );
}

export default TodosView;
