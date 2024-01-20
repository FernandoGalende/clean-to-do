export type TaskDeskProps = {
  todo: Todo;
  onUpdateTask: (todo: Todo) => void;
  isEditing: boolean;
};
