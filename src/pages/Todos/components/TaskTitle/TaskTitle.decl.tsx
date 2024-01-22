export type TaskTitleProps = {
  todo: Todo;
  updateTask: (todo: Todo) => void;
};

export type TaskTitleViewProps = {
  todo: Todo;
  setEditing: (value: boolean) => void;
};
