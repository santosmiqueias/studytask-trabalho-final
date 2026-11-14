import { useState, type FormEvent } from "react";
import Icon, { type IconName } from "../components/Icon";
import SectionTitle from "../components/SectionTitle";

const MESSAGE_MAX = 500;
const subjects = ["Sugestão", "Dúvida", "Problema", "Elogio"];

const info: { icon: IconName; title: string; text: string }[] = [
  { icon: "book", title: "Projeto", text: "StudyTask — gerenciador de tarefas acadêmicas" },
  { icon: "layers", title: "Disciplina", text: "Front-end Frameworks" },
  { icon: "clock", title: "Resposta", text: "Formulário demonstrativo, sem envio real" }
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState(subjects[0]);
  const [message, setMessage] = useState("");
  const [sentTo, setSentTo] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSentTo(name.split(" ")[0]);
    setName("");
    setEmail("");
    setMessage("");
    setTopic(subjects[0]);
  }

  return (
    <main className="page">
      <SectionTitle eyebrow="FALE CONOSCO" title="Vamos conversar" description="Tem uma sugestão, encontrou um problema ou quer elogiar? Sua opinião ajuda a melhorar o StudyTask." />

      <section className="contact-layout">
        <div className="contact-info">
          {info.map((item) => (
            <div className="card info-item" key={item.title}>
              <span className="stack-icon"><Icon name={item.icon} size={18} /></span>
              <div><strong>{item.title}</strong><small>{item.text}</small></div>
            </div>
          ))}
          <div className="notice-card compact">
            <Icon name="info" size={18} />
            <p>Este formulário apenas mostra uma confirmação na tela. Nenhum dado é enviado para servidores.</p>
          </div>
        </div>

        <div className="card contact-card">
          {sentTo ? (
            <div className="success-state" role="status">
              <span className="success-icon"><Icon name="check" size={28} /></span>
              <h2>Mensagem recebida{sentTo ? `, ${sentTo}` : ""}!</h2>
              <p>Obrigado pelo contato. Na demonstração, sua mensagem foi registrada apenas nesta tela.</p>
              <button type="button" className="button button-soft" onClick={() => setSentTo("")}>Enviar outra mensagem</button>
            </div>
          ) : (
            <form className="form" onSubmit={handleSubmit}>
              <div className="field">
                <span className="field-label">Assunto</span>
                <div className="chips" role="radiogroup" aria-label="Assunto">
                  {subjects.map((item) => (
                    <button key={item} type="button" role="radio" aria-checked={topic === item}
                      className={`chip ${topic === item ? "active" : ""}`} onClick={() => setTopic(item)}>{item}</button>
                  ))}
                </div>
              </div>
              <div className="form-row">
                <label className="field"><span className="field-label">Nome</span>
                  <input value={name} onChange={(event) => setName(event.target.value)} required placeholder="Seu nome" autoComplete="name" />
                </label>
                <label className="field"><span className="field-label">E-mail</span>
                  <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required placeholder="voce@email.com" autoComplete="email" />
                </label>
              </div>
              <label className="field"><span className="field-label">Mensagem <em>{message.length}/{MESSAGE_MAX}</em></span>
                <textarea value={message} maxLength={MESSAGE_MAX} onChange={(event) => setMessage(event.target.value)} required rows={5} placeholder="Conte para nós o que você pensa..." />
              </label>
              <button className="button button-primary button-lg" type="submit"><Icon name="mail" size={16} />Enviar mensagem</button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
