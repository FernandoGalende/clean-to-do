import { ProviderType as ProviderTypeTodos } from 'src/context/TodosContext/useTodos.decl';

export type TodosViewProps = Omit<ProviderTypeTodos, 'addTask'> & {
  isAddDisabled: boolean;
  handleOnAddTask: () => void;
  task: string;
  setTask: (task: string) => void;
};
