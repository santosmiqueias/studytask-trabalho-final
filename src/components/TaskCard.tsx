import type { Task } from "../types";
import TaskBadge from "./TaskBadge";

interface TaskCardProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TaskCard({ task, onToggle, onDelete }: TaskCardProps) {
  return (
    <article className="task-card">
      <div className="task-main">
        <div>
          <h3>{task.title}</h3>
          <p>{task.subject} • Prazo: {new Date(`${task.dueDate}T00:00:00`).toLocaleDateString("pt-BR")}</p>
        </div>
        <TaskBadge status={task.status} />
      </div>
      <div className="task-actions">
        <button className="button button-light" onClick={() => onToggle(task.id)}>
          {task.status === "Pendente" ? "Marcar como concluída" : "Reabrir tarefa"}
        </button>
        <button className="text-button" onClick={() => onDelete(task.id)}>Excluir</button>
      </div>
    </article>
  );
}
