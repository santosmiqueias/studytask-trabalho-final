import { useState } from "react";
import EmptyState from "../components/EmptyState";
import SectionTitle from "../components/SectionTitle";
import StatCard from "../components/StatCard";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import { useTasks } from "../hooks/useTasks";

export default function Dashboard() {
  const { tasks, pendingCount, completedCount, addTask, toggleTask, deleteTask } = useTasks();
  const [filter, setFilter] = useState<"Todas" | "Pendente" | "Concluída">("Todas");
  const visibleTasks = tasks.filter((task) => filter === "Todas" || task.status === filter);

  return (
    <main className="page">
      <SectionTitle eyebrow="SEU ESPAÇO DE ESTUDOS" title="Painel de tarefas" description="Cadastre, acompanhe e atualize suas atividades acadêmicas." />
      <div className="stats-grid">
        <StatCard label="Total de tarefas" value={tasks.length} description="Atividades cadastradas" tone="blue" />
        <StatCard label="Pendentes" value={pendingCount} description="Precisam da sua atenção" tone="orange" />
        <StatCard label="Concluídas" value={completedCount} description="Você já finalizou" tone="green" />
      </div>
      <div className="dashboard-layout">
        <TaskForm onAdd={addTask} />
        <section className="task-list-section">
          <div className="list-heading">
            <div><h2>Minhas atividades</h2><p>Gerencie suas tarefas abaixo.</p></div>
            <select aria-label="Filtrar tarefas" value={filter} onChange={(event) => setFilter(event.target.value as typeof filter)}>
              <option>Todas</option><option>Pendente</option><option>Concluída</option>
            </select>
          </div>
          {visibleTasks.length > 0
            ? <div className="task-list">{visibleTasks.map((task) => <TaskCard key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />)}</div>
            : <EmptyState />}
        </section>
      </div>
    </main>
  );
}
