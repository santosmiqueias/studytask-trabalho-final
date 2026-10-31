import { useState, type FormEvent } from "react";
import SectionTitle from "../components/SectionTitle";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <main className="page">
      <SectionTitle eyebrow="FALE CONOSCO" title="Entre em contato" description="Envie uma mensagem ou sugestão sobre o StudyTask." />
      <section className="content-panel contact-layout">
        <div><h2>Estamos à disposição!</h2><p>Este formulário é demonstrativo e apresenta uma confirmação na tela. Ele não envia dados para um servidor.</p><p><strong>Projeto:</strong> StudyTask</p><p><strong>Disciplina:</strong> Front-end Frameworks</p></div>
        <form className="task-form" onSubmit={handleSubmit}>
          <label>Nome<input value={name} onChange={(event) => setName(event.target.value)} required placeholder="Seu nome" /></label>
          <label>E-mail<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required placeholder="voce@email.com" /></label>
          <label>Mensagem<textarea value={message} onChange={(event) => setMessage(event.target.value)} required rows={4} placeholder="Digite sua mensagem..." /></label>
          <button className="button button-primary" type="submit">Enviar mensagem</button>
          {sent && <p className="notice" role="status">Mensagem registrada na demonstração. Obrigado!</p>}
        </form>
      </section>
    </main>
  );
}
