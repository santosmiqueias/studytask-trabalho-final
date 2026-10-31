import SectionTitle from "../components/SectionTitle";

export default function About() {
  return (
    <main className="page">
      <SectionTitle eyebrow="SOBRE O PROJETO" title="Conheça o StudyTask" description="Uma aplicação criada para facilitar a organização da rotina de estudos." />
      <section className="content-panel">
        <h2>Objetivo</h2>
        <p>O StudyTask tem como objetivo ajudar estudantes a controlar atividades acadêmicas, visualizar prazos e acompanhar tarefas concluídas e pendentes.</p>
        <h2>Como funciona?</h2>
        <ol className="steps">
          <li><strong>Cadastre:</strong> informe o nome da atividade, a disciplina e a data de entrega.</li>
          <li><strong>Acompanhe:</strong> visualize todas as tarefas no painel.</li>
          <li><strong>Conclua:</strong> marque uma tarefa como concluída quando terminar.</li>
        </ol>
        <h2>Tecnologias utilizadas</h2>
        <div className="tech-list"><span>React.js</span><span>TypeScript</span><span>React Router</span><span>CSS</span><span>LocalStorage</span></div>
      </section>
    </main>
  );
}
