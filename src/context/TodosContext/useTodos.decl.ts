export type ProviderType = {
  addTask: (task: string) => void;
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
  updateTask: (todo: Todo) => void;
  todos: Todo[];
};

export interface TodoProviderProps {
  children: React.ReactNode;
}
