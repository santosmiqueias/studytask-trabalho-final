import { Link } from "react-router-dom";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="brand"><span className="brand-icon"><Icon name="check" size={18} /></span>StudyTask</Link>
          <p>Organize trabalhos, provas e entregas em um só lugar — e saiba sempre o que fazer a seguir.</p>
        </div>
        <div className="footer-links">
          <span>Navegação</span>
          <Link to="/">Início</Link><Link to="/sobre">Sobre</Link><Link to="/dashboard">Painel</Link><Link to="/contato">Contato</Link>
        </div>
        <div className="footer-links">
          <span>Projeto</span>
          <p>Front-end Frameworks</p><p>React + TypeScript</p><p>2026</p>
        </div>
      </div>
      <div className="footer-bottom">Projeto acadêmico • Dados salvos apenas no seu navegador</div>
    </footer>
  );
}
