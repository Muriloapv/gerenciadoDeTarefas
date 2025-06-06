# Gerenciador de Tarefas API

API REST para gerenciamento de tarefas com autenticação de usuários.

## Funcionalidades

- Cadastro de usuários
- Login de usuários
- Cadastro de tarefas
- Listagem de tarefas
- Atualização de status de tarefas
- Remoção de tarefas

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- Prisma
- SQLite
- JWT para autenticação

## Como Executar

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute as migrações do banco de dados:
   ```bash
   npx prisma migrate dev
   ```
4. Inicie o servidor em modo desenvolvimento:
   ```bash
   npm run dev
   ```

## Rotas da API

### Usuários

- POST /users/register - Cadastro de usuário
- POST /users/login - Login de usuário

### Tarefas

- POST /tasks - Criar nova tarefa
- GET /tasks - Listar todas as tarefas
- GET /tasks/status/:status - Listar tarefas por status
- PUT /tasks/:id - Atualizar tarefa
- DELETE /tasks/:id - Remover tarefa

## Estrutura do Projeto

```
src/
├── controllers/    # Controladores da aplicação
├── services/      # Lógica de negócios
├── repositories/  # Acesso a dados
├── models/        # Definição de tipos/interfaces
├── middlewares/   # Middlewares (autenticação, etc)
├── routes/        # Definição das rotas
└── @types/        # Definições de tipos TypeScript
``` 