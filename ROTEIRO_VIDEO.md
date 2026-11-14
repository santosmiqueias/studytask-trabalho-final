# Roteiro de apresentação: StudyTask (até 15 minutos)

> Apresentador: **Miqueias Silva dos Santos** (integrante único, responsável por todos os componentes).
> Use o roteiro como guia e explique com suas palavras. Os tempos são aproximados.

## 1. Abertura — 1 min
"Olá! Meu nome é Miqueias Silva dos Santos e vou apresentar o StudyTask, meu trabalho final da disciplina Front-end Frameworks, do curso de Análise e Desenvolvimento de Sistemas. O StudyTask é um gerenciador de tarefas acadêmicas. Ele ajuda o estudante a organizar trabalhos, provas e atividades e mostra, de forma clara, o que está atrasado, o que vence em breve e quanto já foi concluído."

## 2. Tecnologias — 1 min
"A aplicação foi feita com React e TypeScript, usando o Vite para desenvolvimento e build. O React Router faz a navegação entre as páginas. O CSS foi organizado como um design system, com variáveis de cor e tema escuro. As tarefas ficam salvas no LocalStorage do navegador e os feriados vêm de uma API real, a BrasilAPI. O site está publicado no GitHub Pages."

## 3. Tour pelas páginas — 2 min
- **Início:** apresentação, recursos e como funciona; botão "Abrir meu painel".
- **Sobre:** objetivo, fluxo de uso, hooks e tecnologias.
- **Login:** tela de acesso demonstrativa, com "Mostrar senha". *Não há autenticação real.*
- **Painel:** a parte principal (próximo tópico).
- **Contato:** escolha de assunto, contador de caracteres e confirmação na tela. *Não envia dados para servidor.*
- Mostrar também o **tema escuro**, o **menu no celular** (reduzir a janela) e a **página 404** (digitar um endereço inexistente).

## 4. Demonstração do Painel — 3 min
1. Mostrar a saudação, a mensagem que muda conforme a situação, a **próxima entrega** e o **anel de progresso**.
2. Explicar os 4 indicadores: total, pendentes, atrasadas e concluídas.
3. Clicar em "Adicionar tarefa" com campos vazios e mostrar as **mensagens de validação**.
4. Cadastrar uma tarefa e mostrar o **aviso de confirmação**.
5. Concluir uma tarefa (os indicadores e o anel atualizam) e clicar em **Desfazer**.
6. Excluir com **confirmação** e desfazer a exclusão.
7. Usar a **busca**, as **abas** com contadores e a **ordenação**.
8. Mostrar o card **Próximos feriados** e a tarefa que recebe o aviso "Feriado".

## 5. Componentes — 3 min
"Dividi a interface em 12 componentes funcionais, cada um com uma responsabilidade:"
- **Header** e **Footer**: navegação (com menu mobile e tema) e rodapé.
- **SectionTitle**: títulos padronizados das seções.
- **StatCard**: cada indicador do painel; recebe rótulo, valor, cor e ícone por props.
- **TaskForm**: cadastro com validação e prioridade.
- **TaskCard** e **TaskBadge**: exibem a tarefa e a situação do prazo em linguagem natural.
- **EmptyState**: mensagens diferentes para busca sem resultado, nenhuma concluída etc.
- **ProgressRing**: anel de progresso em SVG.
- **Toast**: aviso com opção de desfazer.
- **HolidayCard**: feriados da API, com carregamento e erro.
- **Icon**: ícones SVG sem bibliotecas externas.

*Mostrar no editor:* `TaskCard.tsx` (props tipadas) e `StatCard.tsx`.

## 6. Hooks — 3 min
- **useState**: tarefas, filtros, busca, formulário, tema e avisos.
- **useEffect**: salva as tarefas no LocalStorage, busca os feriados na API, aplica o tema e fecha o aviso depois de 5 segundos.
- **useMemo**: calcula os indicadores, o progresso e a lista filtrada sem refazer contas à toa.
- **useRef**: devolve o foco ao campo de título após o cadastro ou quando há erro.
- **useCallback**: mantém estáveis as funções passadas ao Toast e ao botão de tentar novamente.
- **Hooks personalizados**: `useTasks` concentra a lógica das tarefas e `useHolidays` concentra o consumo da API.

*Mostrar no editor:* `useTasks.ts`, `useHolidays.ts` e `TaskForm.tsx`.

## 7. API, TypeScript e rotas — 1 min
"A integração usa o endpoint de feriados da BrasilAPI, no arquivo `services/holidaysApi.ts`. O hook `useHolidays` controla os estados de carregamento, sucesso e erro e cancela a requisição se o usuário sair da página. Em `types.ts` defini as interfaces Task e Holiday, e o `App.tsx` declara as rotas com o React Router."

## 8. Encerramento — 1 min
"O projeto atende a todos os requisitos: React com TypeScript, cinco páginas, doze componentes funcionais e sete hooks diferentes. Também inclui os dois itens opcionais: integração com uma API real e deploy no GitHub Pages. Como melhorias futuras, eu poderia adicionar autenticação real e salvar as tarefas em um banco de dados. Obrigado pela atenção!"

---

## Checklist antes de gravar
- [ ] Abrir o site publicado (ou `npm run dev`) e conferir se os feriados carregam.
- [ ] Ter tarefas de exemplo na lista (se necessário, limpe o LocalStorage do site).
- [ ] Deixar o VS Code aberto com `App.tsx`, `types.ts`, `useTasks.ts`, `useHolidays.ts`, `TaskForm.tsx` e `TaskCard.tsx`.
- [ ] Não dizer que Login e Contato funcionam de verdade: são demonstrativos.
- [ ] Depois de publicar o vídeo, colar o link do YouTube no README.
