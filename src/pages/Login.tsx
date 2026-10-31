import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(`Demonstração: formulário preenchido para ${email}. Não há autenticação real neste projeto.`);
  }

  return (
    <main className="page narrow">
      <section className="content-panel login-panel">
        <span className="eyebrow">ÁREA DO ESTUDANTE</span>
        <h1>Bem-vindo de volta!</h1>
        <p>Preencha os campos para demonstrar a tela de acesso.</p>
        <form className="task-form" onSubmit={handleSubmit}>
          <label>E-mail
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="voce@email.com" required />
          </label>
          <label>Senha
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Sua senha" required />
          </label>
          <button className="button button-primary" type="submit">Entrar</button>
        </form>
        {message && <p className="notice" role="status">{message}</p>}
        <p className="muted">Esta é uma tela demonstrativa; não armazena senhas nem autentica usuários.</p>
        <Link to="/dashboard">Ir direto ao painel de demonstração →</Link>
      </section>
    </main>
  );
}
