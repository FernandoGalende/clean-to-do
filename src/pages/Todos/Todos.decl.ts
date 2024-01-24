export interface TodosViewProps {
  isAddDisabled: boolean;
  handleOnAddTask: () => void;
  handleKeyPress: (key: React.KeyboardEvent<HTMLInputElement>) => void;
  task: string;
  setTask: (task: string) => void;
}
