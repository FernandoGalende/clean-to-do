import { Button, Checkbox, Card, DeleteTwoTone, Typography } from 'src/components';

import { TaskTitle } from '..';
import { Flex } from 'src/style/components';
import { useTodos } from 'src/context';

function TodosList() {
  const { deleteTask, toggleTask, updateTask, todos } = useTodos();

  if (!todos.length)
    return (
      <Flex w="100%" h="100%" alignItems="center" justifyContent="center">
        <Typography.Title level={5}>No tasks, hooray! 🥳</Typography.Title>
      </Flex>
    );
  return todos
    .slice()
    .reverse()
    .map(todo => (
      <Card
        style={{ width: '100%' }}
        hoverable
        size="small"
        key={todo.id}
        data-testid={`card-${todo.id}`}
      >
        <Flex w="100%" justifyContent="space-between" alignItems="center">
          <Checkbox checked={todo.done} onClick={() => toggleTask(todo.id)} name="mark-as-done" />
          <TaskTitle todo={todo} updateTask={updateTask} />
          <Button shape="circle" icon={<DeleteTwoTone />} onClick={() => deleteTask(todo.id)} />
        </Flex>
      </Card>
    ));
}

export default TodosList;
