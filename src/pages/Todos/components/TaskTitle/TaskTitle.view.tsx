import { Button, EditTwoTone, Typography } from 'src/components';
import { Flex } from 'src/style/components';

import { TaskTitleViewProps } from './TaskTitle.decl';

function TaskTitleView({ todo, setEditing }: TaskTitleViewProps) {
  return (
    <Flex w="100%" justify="space-between">
      <Typography.Text delete={todo.done}>{todo.task}</Typography.Text>
      <Button shape="circle" icon={<EditTwoTone />} onClick={() => setEditing(true)} />
    </Flex>
  );
}

export default TaskTitleView;
