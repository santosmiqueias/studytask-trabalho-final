import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Icon from "./Icon";

const links = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/dashboard", label: "Painel" },
  { to: "/contato", label: "Contato" }
];

type Theme = "light" | "dark";

function initialTheme(): Theme {
  try {
    const saved = localStorage.getItem("studytask-theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch { /* armazenamento indisponível */ }
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(initialTheme);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("studytask-theme", theme); } catch { /* ignora */ }
  }, [theme]);

  return (
    <header className="header">
      <div className="header-inner">
        <NavLink to="/" className="brand" aria-label="StudyTask — página inicial">
          <span className="brand-icon"><Icon name="check" size={18} /></span>
          StudyTask
        </NavLink>

        <nav className={`nav ${open ? "open" : ""}`} aria-label="Navegação principal">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"}>{link.label}</NavLink>
          ))}
          <NavLink to="/login" className="nav-cta">Entrar</NavLink>
        </nav>

        <div className="header-actions">
          <button className="icon-button" type="button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"} title="Alternar tema">
            <Icon name={theme === "dark" ? "sun" : "moon"} />
          </button>
          <button className="icon-button menu-toggle" type="button" onClick={() => setOpen(!open)}
            aria-expanded={open} aria-label={open ? "Fechar menu" : "Abrir menu"}>
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>
    </header>
  );
}
