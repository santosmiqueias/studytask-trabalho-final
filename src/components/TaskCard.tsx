import { useState } from "react";
import type { Holiday, Task } from "../types";
import { formatDate, getDueInfo } from "../utils/date";
import Icon from "./Icon";
import TaskBadge from "./TaskBadge";

interface TaskCardProps {
  task: Task;
  holiday?: Holiday;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TaskCard({ task, holiday, onToggle, onDelete }: TaskCardProps) {
  const [confirming, setConfirming] = useState(false);
  const due = getDueInfo(task);
  const done = task.status === "Concluída";
  const priority = task.priority ?? "Média";

  return (
    <article className={`task-card due-${due.tone} ${done ? "is-done" : ""}`}>
      <button className="task-check" type="button" onClick={() => onToggle(task.id)}
        aria-label={done ? `Reabrir "${task.title}"` : `Concluir "${task.title}"`} title={done ? "Reabrir tarefa" : "Marcar como concluída"}>
        <Icon name="check" size={14} />
      </button>

      <div className="task-body">
        <div className="task-main">
          <h3>{task.title}</h3>
          <TaskBadge due={due} />
        </div>
        <div className="task-meta">
          <span><Icon name="book" size={13} />{task.subject}</span>
          <span><Icon name="calendar" size={13} />{formatDate(task.dueDate)}</span>
          <span className={`priority priority-${priority === "Média" ? "media" : priority.toLowerCase()}`}><Icon name="flag" size={13} />Prioridade {priority.toLowerCase()}</span>
          {holiday && !done && <span className="holiday-flag" title="Data de entrega coincide com um feriado nacional"><Icon name="sparkles" size={13} />Feriado: {holiday.name}</span>}
        </div>
      </div>

      <div className="task-actions">
        {confirming ? (
          <div className="confirm" role="group" aria-label="Confirmar exclusão">
            <span>Excluir?</span>
            <button type="button" className="button button-danger button-sm" onClick={() => onDelete(task.id)}>Sim</button>
            <button type="button" className="button button-ghost button-sm" onClick={() => setConfirming(false)}>Não</button>
          </div>
        ) : (
          <>
            <button type="button" className="button button-soft button-sm" onClick={() => onToggle(task.id)}>
              <Icon name={done ? "undo" : "check"} size={14} />{done ? "Reabrir" : "Concluir"}
            </button>
            <button type="button" className="icon-button danger" onClick={() => setConfirming(true)} aria-label={`Excluir "${task.title}"`} title="Excluir tarefa">
              <Icon name="trash" size={16} />
            </button>
          </>
        )}
      </div>
    </article>
  );
}
