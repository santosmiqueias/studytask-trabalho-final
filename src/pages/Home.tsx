import { Link } from "react-router-dom";
import Icon, { type IconName } from "../components/Icon";
import SectionTitle from "../components/SectionTitle";

const features: { icon: IconName; title: string; text: string }[] = [
  { icon: "plus", title: "Cadastro em segundos", text: "Nome, disciplina, prazo e prioridade. Pronto — sua tarefa já está no painel." },
  { icon: "clock", title: "Prazos que avisam", text: "Cada tarefa mostra quanto tempo falta, e as atrasadas ganham destaque em vermelho." },
  { icon: "target", title: "Progresso visível", text: "Acompanhe a porcentagem concluída e veja sua evolução a cada entrega." },
  { icon: "search", title: "Busca e filtros", text: "Encontre qualquer atividade por nome ou disciplina e ordene por prazo ou prioridade." },
  { icon: "undo", title: "Errou? Desfaça", text: "Concluiu ou excluiu sem querer? Um clique em “Desfazer” resolve." },
  { icon: "lock", title: "Seus dados, seu navegador", text: "Nada vai para servidores: tudo fica salvo localmente no seu dispositivo." }
];

const steps = [
  { title: "Cadastre", text: "Registre trabalhos, provas e listas com a data de entrega." },
  { title: "Priorize", text: "Veja o que vence primeiro e o que é mais importante." },
  { title: "Conclua", text: "Marque como feito e acompanhe seu progresso crescer." }
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <span className="pill"><Icon name="sparkles" size={14} />Gerenciador de tarefas acadêmicas</span>
          <h1>Saiba sempre <span className="gradient-text">o que estudar agora.</span></h1>
          <p>O StudyTask reúne seus trabalhos, provas e atividades em um painel claro, que avisa o que está atrasado, o que vence em breve e quanto você já avançou.</p>
          <div className="hero-actions">
            <Link className="button button-primary button-lg" to="/dashboard">Abrir meu painel<Icon name="arrow" size={16} /></Link>
            <Link className="button button-ghost button-lg" to="/sobre">Como funciona</Link>
          </div>
          <ul className="hero-proof">
            <li><Icon name="check" size={14} />Gratuito</li>
            <li><Icon name="check" size={14} />Sem cadastro</li>
            <li><Icon name="check" size={14} />Funciona no celular</li>
          </ul>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="mock-window">
            <div className="mock-top"><i></i><i></i><i></i><span>Painel • StudyTask</span></div>
            <div className="mock-head">
              <div>
                <small>Boa tarde, estudante!</small>
                <strong>2 entregas esta semana</strong>
              </div>
              <div className="mock-ring"><span>67%</span></div>
            </div>
            <div className="mock-task overdue"><i></i><div><b>Lista de exercícios</b><small>Cálculo I</small></div><em>Atrasada</em></div>
            <div className="mock-task soon"><i></i><div><b>Trabalho final de React</b><small>Front-end</small></div><em>Vence amanhã</em></div>
            <div className="mock-task done"><i></i><div><b>Atividade de lógica</b><small>Algoritmos</small></div><em>Entregue</em></div>
          </div>
          <div className="float-card float-a"><Icon name="check" size={16} /><span>Tarefa concluída!</span></div>
          <div className="float-card float-b"><Icon name="clock" size={16} /><span>Faltam 3 dias</span></div>
        </div>
      </section>

      <section className="metrics-strip">
        <div><strong>5</strong><span>páginas navegáveis</span></div>
        <div><strong>4</strong><span>indicadores em tempo real</span></div>
        <div><strong>100%</strong><span>local e privado</span></div>
        <div><strong>0</strong><span>cadastros necessários</span></div>
      </section>

      <section className="section">
        <SectionTitle as="h2" eyebrow="RECURSOS" title="Tudo o que você precisa, nada que atrapalhe" description="Ferramentas pensadas para a rotina de quem estuda: rápidas de usar e fáceis de entender." />
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="card feature-card" key={feature.title}>
              <span className="feature-icon"><Icon name={feature.icon} size={20} /></span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <SectionTitle as="h2" eyebrow="COMO FUNCIONA" title="Três passos para uma rotina organizada" description="Sem tutorial, sem configuração. Você entende tudo na primeira vez que usa." />
        <ol className="steps-grid">
          {steps.map((step, index) => (
            <li key={step.title} className="step">
              <span className="step-number">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section">
        <div className="cta-band">
          <div>
            <h2>Pronto para colocar os estudos em dia?</h2>
            <p>Já deixamos algumas tarefas de exemplo para você explorar.</p>
          </div>
          <Link className="button button-white button-lg" to="/dashboard">Começar agora<Icon name="arrow" size={16} /></Link>
        </div>
      </section>
    </main>
  );
}
