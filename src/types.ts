export type TaskStatus = "Pendente" | "Concluída";

export interface Task {
  id: number;
  title: string;
  subject: string;
  dueDate: string;
  status: TaskStatus;
}
