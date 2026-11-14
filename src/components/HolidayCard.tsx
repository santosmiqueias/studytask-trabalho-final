import type { Holiday } from "../types";
import { daysUntil, formatDate } from "../utils/date";
import Icon from "./Icon";

interface HolidayCardProps {
  holidays: Holiday[];
  status: "loading" | "success" | "error";
  error: string;
  onRetry: () => void;
}

function whenLabel(date: string) {
  const days = daysUntil(date);
  if (days === 0) return "Hoje";
  if (days === 1) return "Amanhã";
  return `Em ${days} dias`;
}

/** Mostra os próximos feriados nacionais vindos da BrasilAPI, com estados de carregamento e erro. */
export default function HolidayCard({ holidays, status, error, onRetry }: HolidayCardProps) {
  return (
    <section className="card holiday-card" aria-labelledby="holiday-title" aria-busy={status === "loading"}>
      <div className="holiday-head">
        <span className="stack-icon"><Icon name="calendar" size={18} /></span>
        <div>
          <h2 id="holiday-title">Próximos feriados</h2>
          <p>Planeje seus estudos em volta deles</p>
        </div>
      </div>

      {status === "loading" && (
        <ul className="holiday-list">{[0, 1, 2].map((item) => <li key={item} className="skeleton" />)}</ul>
      )}

      {status === "error" && (
        <div className="holiday-error" role="alert">
          <p><Icon name="alert" size={14} />Não foi possível carregar os feriados agora.</p>
          <small>{error}</small>
          <button type="button" className="button button-soft button-sm" onClick={onRetry}><Icon name="undo" size={14} />Tentar novamente</button>
        </div>
      )}

      {status === "success" && (
        <ul className="holiday-list">
          {holidays.slice(0, 3).map((holiday) => (
            <li key={holiday.date}>
              <div><strong>{holiday.name}</strong><small>{formatDate(holiday.date)}</small></div>
              <span className="badge badge-later">{whenLabel(holiday.date)}</span>
            </li>
          ))}
          {holidays.length === 0 && <li className="holiday-empty">Nenhum feriado nos próximos meses.</li>}
        </ul>
      )}

      <p className="holiday-source">Dados em tempo real da <a href="https://brasilapi.com.br" target="_blank" rel="noreferrer">BrasilAPI</a></p>
    </section>
  );
}
