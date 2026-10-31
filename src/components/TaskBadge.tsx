import type { TaskStatus } from "../types";

export default function TaskBadge({ status }: { status: TaskStatus }) {
  return <span className={`badge ${status === "Concluída" ? "done" : "pending"}`}>{status}</span>;
}
