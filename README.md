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
- **Componentes funcionais:** Header, Footer, StatCard, TaskBadge, TaskCard, TaskForm, EmptyState e SectionTitle (8 componentes).
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

## Hooks utilizados
- `useState`: controla estados de formulários, filtros e tarefas.
- `useEffect`: salva as tarefas no LocalStorage quando a lista muda.
- `useMemo`: calcula a quantidade de tarefas pendentes e concluídas.
- `useRef`: coloca o foco no campo de título após cadastrar uma tarefa.
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
