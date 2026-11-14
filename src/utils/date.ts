import type { DueInfo, Task } from "../types";

const DAY = 1000 * 60 * 60 * 24;

function startOfToday() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

export function parseDate(value: string) {
  return new Date(`${value}T00:00:00`);
}

export function formatDate(value: string) {
  return parseDate(value).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
}

export function daysUntil(value: string) {
  return Math.round((parseDate(value).getTime() - startOfToday().getTime()) / DAY);
}

/** Traduz a data de entrega em uma mensagem clara para o estudante. */
export function getDueInfo(task: Task): DueInfo {
  const days = daysUntil(task.dueDate);
  if (task.status === "Concluída") return { tone: "done", label: "Entregue", days };
  if (days < 0) return { tone: "overdue", label: days === -1 ? "Atrasada há 1 dia" : `Atrasada há ${Math.abs(days)} dias`, days };
  if (days === 0) return { tone: "today", label: "Vence hoje", days };
  if (days === 1) return { tone: "soon", label: "Vence amanhã", days };
  if (days <= 3) return { tone: "soon", label: `Vence em ${days} dias`, days };
  return { tone: "later", label: `Faltam ${days} dias`, days };
}

export function todayISO(offsetDays = 0) {
  const date = startOfToday();
  date.setDate(date.getDate() + offsetDays);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

export function greeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Bom dia";
  if (hour < 18) return "Boa tarde";
  return "Boa noite";
}
