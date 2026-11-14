import type { ReactNode } from "react";
import Icon, { type IconName } from "./Icon";

interface EmptyStateProps {
  icon?: IconName;
  title?: string;
  description?: string;
  action?: ReactNode;
}

export default function EmptyState({
  icon = "sparkles",
  title = "Nenhuma tarefa por aqui",
  description = "Cadastre uma nova atividade para começar sua organização.",
  action
}: EmptyStateProps) {
  return (
    <div className="empty-state">
      <span className="empty-icon"><Icon name={icon} size={24} /></span>
      <h3>{title}</h3>
      <p>{description}</p>
      {action}
    </div>
  );
}
