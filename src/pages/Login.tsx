import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(`Formulário preenchido para ${email}. Esta é uma demonstração: não há autenticação real neste projeto.`);
  }

  return (
    <main className="auth">
      <section className="auth-aside" aria-hidden="true">
        <div className="auth-aside-inner">
          <span className="pill pill-light"><Icon name="sparkles" size={14} />Área do estudante</span>
          <h2>Sua rotina de estudos, finalmente sob controle.</h2>
          <ul>
            <li><Icon name="check" size={16} />Prazos com avisos claros</li>
            <li><Icon name="check" size={16} />Progresso visível a cada entrega</li>
            <li><Icon name="check" size={16} />Busca, filtros e prioridades</li>
          </ul>
          <blockquote>“Abri o painel e em 5 segundos sabia o que precisava fazer hoje.”<cite>— estudante de exemplo</cite></blockquote>
        </div>
      </section>

      <section className="auth-main">
        <div className="auth-card">
          <span className="eyebrow">BEM-VINDO DE VOLTA</span>
          <h1>Entre na sua conta</h1>
          <p className="muted">Preencha os campos para ver a demonstração da tela de acesso.</p>

          <form className="form" onSubmit={handleSubmit}>
            <label className="field">
              <span className="field-label">E-mail</span>
              <span className="input-icon"><Icon name="mail" size={16} />
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="voce@email.com" autoComplete="email" required />
              </span>
            </label>
            <label className="field">
              <span className="field-label">Senha</span>
              <span className="input-icon"><Icon name="lock" size={16} />
                <input type={showPassword ? "text" : "password"} value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Sua senha" autoComplete="current-password" required />
                <button type="button" className="input-action" onClick={() => setShowPassword(!showPassword)}>{showPassword ? "Ocultar" : "Mostrar"}</button>
              </span>
            </label>
            <button className="button button-primary button-block button-lg" type="submit">Entrar</button>
          </form>

          {message && <p className="notice notice-success" role="status"><Icon name="check" size={16} />{message}</p>}

          <div className="divider"><span>ou</span></div>
          <Link to="/dashboard" className="button button-ghost button-block">Ir direto ao painel de demonstração<Icon name="arrow" size={16} /></Link>
          <p className="fine-print"><Icon name="lock" size={12} />Tela demonstrativa: não armazena senhas nem autentica usuários.</p>
        </div>
      </section>
    </main>
  );
}
