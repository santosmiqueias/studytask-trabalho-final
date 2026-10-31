import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">ORGANIZE • PLANEJE • CONQUISTE</span>
          <h1>Seus estudos em ordem. Seus objetivos mais perto.</h1>
          <p>O StudyTask ajuda você a organizar trabalhos, provas e atividades em um só lugar, acompanhando cada etapa da sua rotina acadêmica.</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/dashboard">Acessar meu painel</Link>
            <Link className="button button-light" to="/sobre">Conhecer o projeto</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="mock-window">
            <div className="mock-top"><i></i><i></i><i></i><span>Meu planejamento</span></div>
            <div className="mock-greeting">Olá, estudante! 👋</div>
            <div className="mock-number">03 <small>tarefas para acompanhar</small></div>
            <div className="mock-line"><span></span></div>
            <div className="mock-task">☑ Revisar conteúdo de React</div>
            <div className="mock-task">◯ Finalizar atividade de banco de dados</div>
            <div className="mock-task">◯ Preparar apresentação</div>
          </div>
        </div>
      </section>
      <section className="features">
        <SectionTitle eyebrow="POR QUE USAR?" title="Tudo mais simples e organizado" description="Ferramentas essenciais para acompanhar sua vida acadêmica." />
        <div className="feature-grid">
          <article className="feature-card"><span>✍️</span><h3>Cadastre atividades</h3><p>Registre tarefas, disciplinas e datas de entrega.</p></article>
          <article className="feature-card"><span>📌</span><h3>Acompanhe prazos</h3><p>Visualize o que ainda precisa ser feito.</p></article>
          <article className="feature-card"><span>🎯</span><h3>Veja seu progresso</h3><p>Marque atividades concluídas e acompanhe seus resultados.</p></article>
        </div>
      </section>
    </main>
  );
}
