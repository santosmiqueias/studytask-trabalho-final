import { useRef, useState, type FormEvent } from "react";

interface TaskFormProps {
  onAdd: (task: { title: string; subject: string; dueDate: string }) => void;
}

export default function TaskForm({ onAdd }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [dueDate, setDueDate] = useState("");
  const titleRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!title.trim() || !subject.trim() || !dueDate) {
      titleRef.current?.focus();
      return;
    }
    onAdd({ title: title.trim(), subject: subject.trim(), dueDate });
    setTitle("");
    setSubject("");
    setDueDate("");
    titleRef.current?.focus();
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>Adicionar tarefa</h2>
      <label>Nome da atividade
        <input ref={titleRef} value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Ex.: Trabalho de React" required />
      </label>
      <label>Disciplina
        <input value={subject} onChange={(event) => setSubject(event.target.value)} placeholder="Ex.: Front-end" required />
      </label>
      <label>Data de entrega
        <input type="date" value={dueDate} onChange={(event) => setDueDate(event.target.value)} required />
      </label>
      <button className="button button-primary" type="submit">Cadastrar tarefa</button>
    </form>
  );
}
