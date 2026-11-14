import { useRef, useState, type FormEvent } from "react";
import type { NewTask, TaskPriority } from "../types";
import { todayISO } from "../utils/date";
import Icon from "./Icon";

interface TaskFormProps {
  onAdd: (task: NewTask) => void;
}

type Errors = Partial<Record<"title" | "subject" | "dueDate", string>>;

const priorities: TaskPriority[] = ["Baixa", "Média", "Alta"];
const TITLE_MAX = 60;

export default function TaskForm({ onAdd }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState<TaskPriority>("Média");
  const [errors, setErrors] = useState<Errors>({});
  const titleRef = useRef<HTMLInputElement>(null);

  function validate(): Errors {
    const next: Errors = {};
    if (!title.trim()) next.title = "Dê um nome para a atividade.";
    if (!subject.trim()) next.subject = "Informe a disciplina.";
    if (!dueDate) next.dueDate = "Escolha a data de entrega.";
    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      titleRef.current?.focus();
      return;
    }
    onAdd({ title: title.trim(), subject: subject.trim(), dueDate, priority });
    setTitle("");
    setSubject("");
    setDueDate("");
    setPriority("Média");
    titleRef.current?.focus();
  }

  return (
    <form className="card task-form" onSubmit={handleSubmit} noValidate>
      <div className="form-head">
        <span className="form-icon"><Icon name="plus" size={18} /></span>
        <div>
          <h2>Nova tarefa</h2>
          <p>Leva menos de 10 segundos.</p>
        </div>
      </div>

      <label className="field">
        <span className="field-label">Nome da atividade <em>{title.length}/{TITLE_MAX}</em></span>
        <input ref={titleRef} value={title} maxLength={TITLE_MAX} aria-invalid={!!errors.title}
          onChange={(event) => { setTitle(event.target.value); setErrors((e) => ({ ...e, title: undefined })); }}
          placeholder="Ex.: Trabalho final de React" />
        {errors.title && <small className="field-error">{errors.title}</small>}
      </label>

      <label className="field">
        <span className="field-label">Disciplina</span>
        <input value={subject} aria-invalid={!!errors.subject}
          onChange={(event) => { setSubject(event.target.value); setErrors((e) => ({ ...e, subject: undefined })); }}
          placeholder="Ex.: Front-end Frameworks" />
        {errors.subject && <small className="field-error">{errors.subject}</small>}
      </label>

      <label className="field">
        <span className="field-label">Data de entrega</span>
        <input type="date" value={dueDate} min={todayISO(-365)} aria-invalid={!!errors.dueDate}
          onChange={(event) => { setDueDate(event.target.value); setErrors((e) => ({ ...e, dueDate: undefined })); }} />
        {errors.dueDate && <small className="field-error">{errors.dueDate}</small>}
      </label>

      <div className="field">
        <span className="field-label">Prioridade</span>
        <div className="segmented" role="radiogroup" aria-label="Prioridade">
          {priorities.map((item) => (
            <button key={item} type="button" role="radio" aria-checked={priority === item}
              className={`seg-${item === "Média" ? "media" : item.toLowerCase()} ${priority === item ? "active" : ""}`}
              onClick={() => setPriority(item)}>{item}</button>
          ))}
        </div>
      </div>

      <button className="button button-primary button-block" type="submit"><Icon name="plus" size={16} />Adicionar tarefa</button>
    </form>
  );
}
