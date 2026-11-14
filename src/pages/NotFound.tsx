import { Link } from "react-router-dom";
import EmptyState from "../components/EmptyState";

export default function NotFound() {
  return (
    <main className="page narrow-page">
      <EmptyState icon="search" title="Página não encontrada"
        description="O endereço digitado não existe. Que tal voltar ao início ou abrir seu painel?"
        action={<div className="hero-actions center"><Link to="/" className="button button-ghost">Voltar ao início</Link><Link to="/dashboard" className="button button-primary">Abrir painel</Link></div>} />
    </main>
  );
}
