import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="brand"><span className="brand-icon">S</span> StudyTask</NavLink>
      <nav className="nav">
        <NavLink to="/">Início</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
        <NavLink to="/dashboard">Painel</NavLink>
        <NavLink to="/login">Entrar</NavLink>
        <NavLink to="/contato">Contato</NavLink>
      </nav>
    </header>
  );
}
