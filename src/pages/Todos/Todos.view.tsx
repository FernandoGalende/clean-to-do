import { Flex } from 'src/style/components';

import { Button, Input, Space } from 'src/components';

import { TodosList } from './components';
import { TodosViewProps } from './Todos.decl';

function TodosView({
  isAddDisabled,
  handleOnAddTask,
  handleKeyPress,
  task,
  setTask
}: TodosViewProps) {
  return (
    <Flex
      flexDirection="column"
      backgroundColor="surface-background"
      borderRadius="4"
      padding="3"
      gap="4"
      w="80vw"
      maxWidth="330"
    >
      <Space.Compact style={{ width: '100%' }}>
        <Input
          value={task}
          placeholder="add task"
          onChange={evt => setTask(evt.target.value)}
          data-testid="add-input"
          onKeyDown={handleKeyPress}
        />
        <Button type="primary" onClick={handleOnAddTask} disabled={isAddDisabled}>
          Add
        </Button>
      </Space.Compact>
      <Flex
        data-testid="list"
        flexDirection="column"
        gap="2"
        padding="2"
        overflow="scroll"
        h="415"
        borderWidth={1}
        borderStyle="solid"
        borderColor="graphic-interactive-default"
      >
        <TodosList />
      </Flex>
    </Flex>
  );
}

export default TodosView;
