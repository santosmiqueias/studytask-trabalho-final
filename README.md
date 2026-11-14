# StudyTask — Gerenciador de Tarefas Acadêmicas

Projeto acadêmico desenvolvido com **React.js + TypeScript** para a disciplina Front-end Frameworks.

## Objetivo
Ajudar estudantes a cadastrar, acompanhar, concluir e excluir tarefas acadêmicas.

## Tecnologias
- React.js
- TypeScript
- Vite
- React Router DOM
- CSS
- LocalStorage do navegador

## Requisitos do trabalho atendidos
- **5 páginas:** Início, Sobre, Login, Painel e Contato.
- **Componentes funcionais:** Header, Footer, StatCard, TaskBadge, TaskCard, TaskForm, EmptyState, SectionTitle, ProgressRing, Toast e Icon (11 componentes).
- **Hooks:** useState, useEffect, useMemo e useRef.
- **TypeScript:** tipos e interfaces em `src/types.ts` e nas propriedades dos componentes.
- **Persistência local:** tarefas ficam salvas no LocalStorage do navegador.

> Observação: Login e Contato são telas demonstrativas. Não existe autenticação real nem envio de mensagens para servidor. O projeto não utiliza API/backend; esse requisito é opcional no enunciado.

## Como executar
1. Instale o Node.js (versão LTS).
2. Extraia o projeto e abra a pasta `studytask` no terminal.
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor:
   ```bash
   npm run dev
   ```
5. Abra no navegador o endereço exibido pelo Vite (normalmente `http://localhost:5173`).

## Como gerar a versão de produção
```bash
npm run build
npm run preview
```

## Estrutura
```text
src/
  components/   # componentes reutilizáveis
  hooks/        # lógica reutilizável (useTasks)
  pages/        # páginas da aplicação
  App.tsx       # rotas
  main.tsx      # inicialização
  types.ts      # tipos TypeScript
  utils/        # funções de data e prazos
  styles.css    # estilos
```

## Componentes e responsabilidades
| Componente | Responsabilidade |
|---|---|
| Header | Menu de navegação |
| Footer | Rodapé |
| StatCard | Exibe indicadores do painel |
| TaskBadge | Mostra o status da tarefa |
| TaskCard | Exibe e permite atualizar/excluir uma tarefa |
| TaskForm | Formulário para cadastrar tarefa |
| EmptyState | Mensagem quando não há tarefas |
| SectionTitle | Título e descrição padronizados |
| ProgressRing | Anel com a porcentagem de tarefas concluídas |
| Toast | Aviso de confirmação após cada ação, com opção de desfazer |
| Icon | Ícones SVG leves, sem dependências externas |

## Interface e experiência
- Design system com tokens de cor, tipografia (Inter + Plus Jakarta Sans) e **tema claro/escuro** (botão no topo, preferência salva).
- **Prazos comunicados em linguagem natural:** "Vence hoje", "Vence em 2 dias", "Atrasada há 1 dia", com cores por urgência.
- Painel com saudação, mensagem motivacional, próxima entrega, anel de progresso e 4 indicadores (total, pendentes, atrasadas, concluídas).
- Busca, abas de filtro com contadores, ordenação por prazo/prioridade/recentes e prioridade por tarefa.
- Validação de formulário com mensagens por campo, confirmação antes de excluir e avisos com **Desfazer**.
- Estados vazios contextuais, página 404, menu responsivo para celular e suporte a `prefers-reduced-motion`.

## Hooks utilizados
- `useState`: controla estados de formulários, filtros e tarefas.
- `useEffect`: salva as tarefas e o tema no LocalStorage, atualiza o título da página e fecha os avisos automaticamente.
- `useMemo`: calcula os indicadores, o progresso e a lista filtrada/ordenada.
- `useRef`: coloca o foco no campo de título após cadastrar uma tarefa ou quando há erro de validação.
- `useTasks`: hook personalizado que concentra as operações das tarefas.

## Integrantes
Preencha antes da entrega:
- Nome do integrante 1 — componentes: __________________ e __________________
- Nome do integrante 2 — componentes: __________________ e __________________
- Nome do integrante 3 — componentes: __________________ e __________________
- Nome do integrante 4 — componentes: __________________ e __________________
- Nome do integrante 5 — componentes: __________________ e __________________
- Nome do integrante 6 — componentes: __________________ e __________________

Ajuste a lista ao número real de participantes e identifique os componentes efetivamente apresentados por cada pessoa.

## Evidências para o GitHub
Inclua prints das páginas Início, Sobre, Login, Painel e Contato. Atualize esta seção com os nomes dos integrantes e seus componentes.
