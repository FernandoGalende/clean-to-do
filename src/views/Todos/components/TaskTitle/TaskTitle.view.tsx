import { Button, Flex, Typography } from 'antd';
import { EditTwoTone } from '@ant-design/icons';

import { TaskTitleViewProps } from './TaskTitle.decl';

function TaskTitleView({ todo, setEditing }: TaskTitleViewProps) {
  return (
    <Flex style={{ width: '100%' }} justify="space-between">
      <Typography.Text delete={todo.done}>{todo.task}</Typography.Text>
      <Button shape="circle" icon={<EditTwoTone />} onClick={() => setEditing(true)} />
    </Flex>
  );
}

export default TaskTitleView;
