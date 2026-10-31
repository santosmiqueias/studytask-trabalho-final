# Roteiro de apresentação — StudyTask (até 15 minutos)

> Adapte os nomes dos integrantes e distribua as falas. O enunciado pede que todos participem. Cada pessoa deve explicar os componentes que desenvolveu.

## 1. Abertura e apresentação do tema — 1 minuto
"Olá! Nós somos o grupo [nome/número] e vamos apresentar o projeto StudyTask, desenvolvido para a disciplina Front-end Frameworks. O StudyTask é um gerenciador de tarefas acadêmicas. A ideia é ajudar estudantes a organizar trabalhos, provas e atividades, acompanhando prazos e tarefas concluídas."

## 2. Objetivo e tecnologias — 1 minuto
"Nosso objetivo foi criar uma aplicação web utilizando React com TypeScript. Utilizamos React para construir a interface por componentes, TypeScript para definir os tipos dos dados, React Router para navegar entre as páginas e CSS para a parte visual. Também utilizamos o LocalStorage para manter as tarefas salvas no próprio navegador."

## 3. Demonstração das cinco páginas — 2 minutos
"Começando pela página inicial, temos uma apresentação do sistema e um botão que leva ao painel. Na página Sobre, explicamos o objetivo e as tecnologias. A página Login demonstra uma tela de acesso, mas não realiza autenticação real. No Painel, podemos cadastrar, filtrar, concluir e excluir tarefas. Por último, a página Contato apresenta um formulário demonstrativo, que exibe uma confirmação na tela, sem enviar dados para um servidor."

## 4. Demonstração prática do painel — 2 minutos
"Agora vamos demonstrar o funcionamento principal. Primeiro, cadastramos uma tarefa informando o nome, a disciplina e a data de entrega. Depois, ela aparece na lista como pendente. Podemos marcar a tarefa como concluída, reabri-la ou excluí-la. Também podemos filtrar a lista para visualizar todas, somente as pendentes ou somente as concluídas. Os indicadores no topo são atualizados de acordo com as tarefas."

## 5. Explicação dos componentes — 3 minutos
"Para organizar o código, dividimos a interface em componentes funcionais e reutilizáveis. O Header contém a navegação e o Footer apresenta o rodapé. O SectionTitle padroniza os títulos das páginas. O StatCard apresenta os números do painel. O TaskForm recebe os dados de uma nova tarefa. O TaskCard mostra cada atividade e oferece as ações de concluir e excluir. O TaskBadge identifica se a tarefa está pendente ou concluída. O EmptyState aparece quando não existem tarefas para mostrar."

"Cada componente tem uma responsabilidade específica. Isso facilita a manutenção, evita repetição de código e deixa o projeto mais organizado."

## 6. Explicação dos hooks — 3 minutos
"Utilizamos quatro hooks principais. O useState controla informações que mudam na tela, como tarefas, filtros e campos dos formulários. O useEffect executa um efeito quando a lista de tarefas muda; nesse caso, ele salva os dados no LocalStorage. O useMemo memoriza os cálculos de quantidade de tarefas pendentes e concluídas, evitando refazer esses cálculos sem necessidade. O useRef guarda uma referência ao campo de título e permite colocar o foco nele depois do cadastro."

"Também criamos o hook personalizado useTasks, que reúne a lógica de adicionar, concluir e excluir tarefas. Assim, a lógica fica separada da apresentação visual."

## 7. TypeScript e navegação — 1 minuto
"Usamos TypeScript para definir a estrutura de uma tarefa, com identificador, título, disciplina, data e status. Também definimos propriedades e tipos dos componentes, o que ajuda a identificar erros durante o desenvolvimento. Para as cinco páginas, utilizamos React Router, que permite navegar entre os caminhos sem precisar recarregar toda a aplicação."

## 8. Encerramento — 1 minuto
"Concluímos que o projeto atende aos requisitos principais propostos: foi desenvolvido com React e TypeScript, possui cinco páginas, oito componentes funcionais e utiliza quatro hooks diferentes. Como melhoria futura, poderíamos implementar autenticação e integrar uma API ou banco de dados. Obrigado pela atenção!"

---

# Dicas para gravar
- Deixe o projeto aberto no navegador antes de iniciar a gravação.
- Mostre as cinco páginas clicando no menu.
- No Painel, cadastre uma tarefa nova e demonstre concluir, reabrir, filtrar e excluir.
- Depois mostre o código no editor: `App.tsx`, `useTasks.ts`, `TaskForm.tsx` e `types.ts`.
- Não leia tudo olhando para baixo: use o roteiro como guia e explique com suas palavras.
- Cada integrante deve falar e explicar os dois componentes pelos quais ficou responsável, conforme a divisão do grupo.
- Evite afirmar que Login, Contato ou API possuem funcionalidades reais que não foram implementadas.
