import { Space, Input, Button } from 'src/components';
import { TaskTitleEditorProps } from './TaskTitleEditor.decl';

function TaskTitleEditor({ update, setUpdateTask, handleUpdateTask }: TaskTitleEditorProps) {
  return (
    <Space.Compact style={{ width: '100%' }}>
      <Input
        value={update}
        onChange={evt => setUpdateTask(evt.target.value)}
        data-testid="edit-input"
      />
      <Button type="primary" onClick={handleUpdateTask}>
        Save
      </Button>
    </Space.Compact>
  );
}

export default TaskTitleEditor;
