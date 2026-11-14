import { useCallback, useMemo, useState } from "react";
import EmptyState from "../components/EmptyState";
import Icon from "../components/Icon";
import ProgressRing from "../components/ProgressRing";
import StatCard from "../components/StatCard";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import Toast, { type ToastData } from "../components/Toast";
import { useTasks } from "../hooks/useTasks";
import type { NewTask } from "../types";
import { formatDate, getDueInfo, greeting } from "../utils/date";

type Filter = "Todas" | "Pendente" | "Concluída";
type Sort = "prazo" | "prioridade" | "recentes";

const priorityWeight = { Alta: 0, Média: 1, Baixa: 2 } as const;

function motivation(progress: number, overdue: number, total: number) {
  if (total === 0) return "Comece cadastrando sua primeira atividade ao lado.";
  if (overdue > 0) return `Você tem ${overdue} ${overdue === 1 ? "tarefa atrasada" : "tarefas atrasadas"}. Que tal começar por ${overdue === 1 ? "ela" : "elas"}?`;
  if (progress === 100) return "Tudo concluído! Aproveite o descanso — você mereceu.";
  if (progress >= 50) return "Mais da metade feita. Continue nesse ritmo!";
  return "Um passo de cada vez: foque na próxima entrega.";
}

export default function Dashboard() {
  const { tasks, stats, addTask, toggleTask, deleteTask, restoreTask } = useTasks();
  const [filter, setFilter] = useState<Filter>("Todas");
  const [sort, setSort] = useState<Sort>("prazo");
  const [query, setQuery] = useState("");
  const [toast, setToast] = useState<ToastData | null>(null);
  const closeToast = useCallback(() => setToast(null), []);

  const visibleTasks = useMemo(() => {
    const term = query.trim().toLowerCase();
    return tasks
      .filter((task) => filter === "Todas" || task.status === filter)
      .filter((task) => !term || `${task.title} ${task.subject}`.toLowerCase().includes(term))
      .sort((a, b) => {
        if (sort === "recentes") return b.id - a.id;
        if (a.status !== b.status) return a.status === "Pendente" ? -1 : 1;
        if (sort === "prioridade") return priorityWeight[a.priority ?? "Média"] - priorityWeight[b.priority ?? "Média"];
        return a.dueDate.localeCompare(b.dueDate);
      });
  }, [tasks, filter, sort, query]);

  function handleAdd(task: NewTask) {
    addTask(task);
    setToast({ id: Date.now(), tone: "success", message: `"${task.title}" foi adicionada à sua lista.` });
  }

  function handleToggle(id: number) {
    const task = tasks.find((item) => item.id === id);
    if (!task) return;
    toggleTask(id);
    const completing = task.status === "Pendente";
    setToast({
      id: Date.now(),
      tone: completing ? "success" : "info",
      message: completing ? `Boa! "${task.title}" foi concluída.` : `"${task.title}" voltou para pendentes.`,
      onAction: () => toggleTask(id)
    });
  }

  function handleDelete(id: number) {
    const task = tasks.find((item) => item.id === id);
    if (!task) return;
    deleteTask(id);
    setToast({ id: Date.now(), tone: "danger", message: `"${task.title}" foi excluída.`, onAction: () => restoreTask(task) });
  }

  const counts: Record<Filter, number> = { Todas: stats.total, Pendente: stats.pending, Concluída: stats.completed };
  const nextDue = stats.next ? getDueInfo(stats.next) : null;

  return (
    <main className="page dashboard">
      <section className="overview card">
        <div className="overview-copy">
          <span className="eyebrow">SEU ESPAÇO DE ESTUDOS</span>
          <h1>{greeting()}, estudante!</h1>
          <p>{motivation(stats.progress, stats.overdue, stats.total)}</p>
          {stats.next && nextDue && (
            <div className="next-up">
              <span className="next-label"><Icon name="target" size={14} />Próxima entrega</span>
              <strong>{stats.next.title}</strong>
              <span>{stats.next.subject} • {formatDate(stats.next.dueDate)} • <b className={`text-${nextDue.tone}`}>{nextDue.label}</b></span>
            </div>
          )}
        </div>
        <ProgressRing value={stats.progress} size={136} />
      </section>

      <div className="stats-grid">
        <StatCard label="Total" value={stats.total} description="Atividades cadastradas" tone="blue" icon="list" />
        <StatCard label="Pendentes" value={stats.pending} description={stats.dueSoon ? `${stats.dueSoon} vencem em até 3 dias` : "Nada urgente no momento"} tone="orange" icon="clock" />
        <StatCard label="Atrasadas" value={stats.overdue} description={stats.overdue ? "Precisam da sua atenção" : "Nenhum prazo perdido"} tone="red" icon="alert" />
        <StatCard label="Concluídas" value={stats.completed} description={`${stats.progress}% do total`} tone="green" icon="check" />
      </div>

      <div className="dashboard-layout">
        <aside className="dashboard-aside">
          <TaskForm onAdd={handleAdd} />
          <div className="card tip">
            <Icon name="info" size={16} />
            <p><strong>Dica:</strong> as cores indicam o prazo — <span className="text-overdue">vermelho</span> atrasada, <span className="text-today">laranja</span> urgente e <span className="text-later">azul</span> no prazo.</p>
          </div>
        </aside>

        <section className="task-list-section" aria-labelledby="list-title">
          <div className="list-heading">
            <div>
              <h2 id="list-title">Minhas atividades</h2>
              <p>{visibleTasks.length} de {stats.total} {stats.total === 1 ? "tarefa exibida" : "tarefas exibidas"}</p>
            </div>
            <label className="search">
              <Icon name="search" size={16} />
              <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar tarefa ou disciplina" aria-label="Buscar tarefas" />
            </label>
          </div>

          <div className="toolbar">
            <div className="tabs" role="tablist" aria-label="Filtrar por status">
              {(Object.keys(counts) as Filter[]).map((item) => (
                <button key={item} type="button" role="tab" aria-selected={filter === item}
                  className={filter === item ? "active" : ""} onClick={() => setFilter(item)}>
                  {item === "Todas" ? "Todas" : item === "Pendente" ? "Pendentes" : "Concluídas"}
                  <span className="count">{counts[item]}</span>
                </button>
              ))}
            </div>
            <label className="sort">
              Ordenar por
              <select value={sort} onChange={(event) => setSort(event.target.value as Sort)}>
                <option value="prazo">Prazo</option>
                <option value="prioridade">Prioridade</option>
                <option value="recentes">Mais recentes</option>
              </select>
            </label>
          </div>

          {visibleTasks.length > 0 ? (
            <div className="task-list">
              {visibleTasks.map((task) => <TaskCard key={task.id} task={task} onToggle={handleToggle} onDelete={handleDelete} />)}
            </div>
          ) : query ? (
            <EmptyState icon="search" title="Nada encontrado" description={`Nenhuma tarefa corresponde a "${query}".`}
              action={<button type="button" className="button button-soft" onClick={() => setQuery("")}>Limpar busca</button>} />
          ) : filter === "Concluída" ? (
            <EmptyState icon="target" title="Nenhuma tarefa concluída ainda" description="Quando você finalizar uma atividade, ela aparece aqui." />
          ) : filter === "Pendente" && stats.total > 0 ? (
            <EmptyState icon="check" title="Tudo em dia!" description="Você não tem tarefas pendentes. Excelente trabalho." />
          ) : (
            <EmptyState />
          )}
        </section>
      </div>

      <Toast toast={toast} onClose={closeToast} />
    </main>
  );
}
