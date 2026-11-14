import { Link } from "react-router-dom";
import Icon, { type IconName } from "../components/Icon";
import SectionTitle from "../components/SectionTitle";

const pillars: { icon: IconName; title: string; text: string }[] = [
  { icon: "target", title: "Objetivo", text: "Ajudar estudantes a controlar atividades acadêmicas, visualizar prazos e acompanhar o que já foi concluído." },
  { icon: "user", title: "Para quem", text: "Estudantes que lidam com várias disciplinas e precisam de uma visão rápida do que fazer primeiro." },
  { icon: "message", title: "Comunicação clara", text: "Cada tela diz exatamente o que está acontecendo: prazos em linguagem natural, avisos e confirmações." }
];

const flow = [
  { title: "Cadastre", text: "Informe o nome da atividade, a disciplina, a data de entrega e a prioridade." },
  { title: "Acompanhe", text: "O painel calcula quanto falta para cada prazo e destaca as tarefas atrasadas." },
  { title: "Filtre e busque", text: "Veja só pendentes ou concluídas, pesquise por nome e ordene por prazo ou prioridade." },
  { title: "Conclua", text: "Marque como concluída, reabra se precisar e acompanhe o anel de progresso." },
  { title: "Fique de olho nos feriados", text: "O painel consulta a BrasilAPI e avisa quando uma entrega cai em um feriado nacional." }
];

const stack: { icon: IconName; name: string; role: string }[] = [
  { icon: "code", name: "React.js", role: "Interface em componentes funcionais" },
  { icon: "layers", name: "TypeScript", role: "Tipos para tarefas e propriedades" },
  { icon: "arrow", name: "React Router", role: "Navegação entre as 5 páginas" },
  { icon: "sparkles", name: "CSS moderno", role: "Design responsivo e tema escuro" },
  { icon: "database", name: "LocalStorage", role: "Persistência no navegador" },
  { icon: "target", name: "Vite", role: "Build rápido e servidor de desenvolvimento" },
  { icon: "calendar", name: "BrasilAPI", role: "API REST real com os feriados nacionais" },
  { icon: "github", name: "GitHub Pages", role: "Deploy automático com GitHub Actions" },
  { icon: "user", name: "Acessibilidade", role: "Navegação por teclado e leitores de tela" }
];

const hooks = [
  { name: "useState", text: "Tarefas, filtros, busca, formulários e tema." },
  { name: "useEffect", text: "Salva tarefas e tema no LocalStorage; fecha avisos automaticamente." },
  { name: "useMemo", text: "Calcula indicadores, progresso e a lista filtrada sem retrabalho." },
  { name: "useRef", text: "Devolve o foco ao campo de título após cadastrar ou ao encontrar um erro." },
  { name: "useCallback", text: "Mantém estáveis as funções de fechar aviso e tentar a API novamente." },
  { name: "useTasks", text: "Hook personalizado que concentra toda a lógica das tarefas." },
  { name: "useHolidays", text: "Hook personalizado que consome a BrasilAPI, com carregamento e erro." }
];

export default function About() {
  return (
    <main className="page">
      <SectionTitle eyebrow="SOBRE O PROJETO" title="Conheça o StudyTask" description="Uma aplicação criada para tirar o peso da organização e deixar sua energia para o que importa: estudar." />

      <div className="pillar-grid">
        {pillars.map((pillar) => (
          <article className="card pillar" key={pillar.title}>
            <span className="feature-icon"><Icon name={pillar.icon} size={20} /></span>
            <h2>{pillar.title}</h2>
            <p>{pillar.text}</p>
          </article>
        ))}
      </div>

      <section className="about-split">
        <div className="card">
          <h2 className="card-title">Como funciona?</h2>
          <ol className="timeline">
            {flow.map((item, index) => (
              <li key={item.title}>
                <span className="timeline-dot">{index + 1}</span>
                <div><strong>{item.title}</strong><p>{item.text}</p></div>
              </li>
            ))}
          </ol>
        </div>
        <div className="card">
          <h2 className="card-title">Hooks utilizados</h2>
          <ul className="hook-list">
            {hooks.map((hook) => (
              <li key={hook.name}><code>{hook.name}</code><span>{hook.text}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-block">
        <SectionTitle as="h2" eyebrow="TECNOLOGIAS" title="Construído com ferramentas modernas" description="Uma base sólida, tipada e fácil de manter." />
        <div className="stack-grid">
          {stack.map((item) => (
            <div className="card stack-item" key={item.name}>
              <span className="stack-icon"><Icon name={item.icon} size={18} /></span>
              <div><strong>{item.name}</strong><small>{item.role}</small></div>
            </div>
          ))}
        </div>
      </section>

      <div className="notice-card">
        <Icon name="info" size={18} />
        <p><strong>Transparência:</strong> as telas de Login e Contato são demonstrativas. Não há autenticação real nem envio de dados para servidores. As tarefas ficam no seu navegador; apenas os feriados são consultados na BrasilAPI.</p>
        <Link to="/dashboard" className="button button-primary">Experimentar o painel</Link>
      </div>
    </main>
  );
}
