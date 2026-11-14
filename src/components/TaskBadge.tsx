import type { DueInfo } from "../types";
import Icon from "./Icon";

/** Selo que comunica, em uma palavra, a situação do prazo da tarefa. */
export default function TaskBadge({ due }: { due: DueInfo }) {
  const icon = due.tone === "done" ? "check" : due.tone === "overdue" ? "alert" : "clock";
  return (
    <span className={`badge badge-${due.tone}`}>
      <Icon name={icon} size={12} />
      {due.label}
    </span>
  );
}
