export type TaskStatus = "Pendente" | "Concluída";
export type TaskPriority = "Alta" | "Média" | "Baixa";

export interface Task {
  id: number;
  title: string;
  subject: string;
  dueDate: string;
  status: TaskStatus;
  priority?: TaskPriority;
}

export type NewTask = Omit<Task, "id" | "status">;

export type DueTone = "overdue" | "today" | "soon" | "later" | "done";

export interface DueInfo {
  tone: DueTone;
  label: string;
  days: number;
}

/** Formato retornado pela BrasilAPI em /api/feriados/v1/{ano}. */
export interface Holiday {
  date: string;
  name: string;
  type: string;
}
