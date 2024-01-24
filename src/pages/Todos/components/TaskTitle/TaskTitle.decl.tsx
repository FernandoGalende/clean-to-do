export interface TaskTitleProps {
  todo: Todo;
  updateTask: (todo: Todo) => void;
}

export interface TaskTitleViewProps {
  todo: Todo;
  setEditing: (value: boolean) => void;
}
