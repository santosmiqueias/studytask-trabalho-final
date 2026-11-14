import { useEffect, useMemo, useState } from "react";
import type { NewTask, Task } from "../types";
import { daysUntil, todayISO } from "../utils/date";

const STORAGE_KEY = "studytask-tasks";

// Tarefas de exemplo com datas relativas a hoje, para a demonstração sempre fazer sentido.
const initialTasks: Task[] = [
  { id: 1, title: "Finalizar pesquisa de Front-end", subject: "Desenvolvimento Web", dueDate: todayISO(2), status: "Pendente", priority: "Alta" },
  { id: 2, title: "Estudar para avaliação", subject: "Banco de Dados", dueDate: todayISO(6), status: "Pendente", priority: "Média" },
  { id: 3, title: "Revisar exercícios de lista", subject: "Cálculo I", dueDate: todayISO(-1), status: "Pendente", priority: "Baixa" },
  { id: 4, title: "Entregar atividade de lógica", subject: "Algoritmos", dueDate: todayISO(-3), status: "Concluída", priority: "Média" }
];

function loadTasks(): Task[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? (JSON.parse(saved) as Task[]) : initialTasks;
  } catch {
    return initialTasks;
  }
}

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(loadTasks);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const stats = useMemo(() => {
    const pending = tasks.filter((task) => task.status === "Pendente");
    const completed = tasks.length - pending.length;
    const overdue = pending.filter((task) => daysUntil(task.dueDate) < 0).length;
    const dueSoon = pending.filter((task) => {
      const days = daysUntil(task.dueDate);
      return days >= 0 && days <= 3;
    }).length;
    const progress = tasks.length ? Math.round((completed / tasks.length) * 100) : 0;
    const next = [...pending]
      .filter((task) => daysUntil(task.dueDate) >= 0)
      .sort((a, b) => a.dueDate.localeCompare(b.dueDate))[0];
    return { total: tasks.length, pending: pending.length, completed, overdue, dueSoon, progress, next };
  }, [tasks]);

  function addTask(task: NewTask) {
    setTasks((current) => [{ ...task, id: Date.now(), status: "Pendente" }, ...current]);
  }

  function toggleTask(id: number) {
    setTasks((current) => current.map((task) =>
      task.id === id
        ? { ...task, status: task.status === "Pendente" ? "Concluída" : "Pendente" }
        : task
    ));
  }

  function deleteTask(id: number) {
    setTasks((current) => current.filter((task) => task.id !== id));
  }

  function restoreTask(task: Task) {
    setTasks((current) => [task, ...current.filter((item) => item.id !== task.id)]);
  }

  return { tasks, stats, addTask, toggleTask, deleteTask, restoreTask };
}
