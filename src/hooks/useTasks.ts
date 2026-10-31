import { useEffect, useMemo, useState } from "react";
import type { Task } from "../types";

const initialTasks: Task[] = [
  { id: 1, title: "Finalizar pesquisa de Front-end", subject: "Desenvolvimento Web", dueDate: "2026-11-05", status: "Pendente" },
  { id: 2, title: "Estudar para avaliação", subject: "Banco de Dados", dueDate: "2026-11-08", status: "Pendente" },
  { id: 3, title: "Entregar atividade de lógica", subject: "Algoritmos", dueDate: "2026-10-29", status: "Concluída" }
];

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("studytask-tasks");
    return saved ? JSON.parse(saved) as Task[] : initialTasks;
  });

  useEffect(() => {
    localStorage.setItem("studytask-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const pendingCount = useMemo(
    () => tasks.filter((task) => task.status === "Pendente").length,
    [tasks]
  );

  const completedCount = useMemo(
    () => tasks.filter((task) => task.status === "Concluída").length,
    [tasks]
  );

  function addTask(task: Omit<Task, "id" | "status">) {
    setTasks((current) => [
      { ...task, id: Date.now(), status: "Pendente" },
      ...current
    ]);
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

  return { tasks, pendingCount, completedCount, addTask, toggleTask, deleteTask };
}
