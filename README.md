
# Mediotec API

## Descrição
Mediotec API é uma API para um portal academico direcionado ao Senac Mediotec. Desenvolvida para gerenciar informações de usuários, disciplinas, faltas, conceitos, comunicados e notificações em um sistema educacional.

## Tecnologias Usadas
[![My Skills](https://skillicons.dev/icons?i=js,nodejs,express,mongodb,npm,postman)](https://skillicons.dev)

## Estrutura do Projeto

```
Projeto-de-P.I
├── .gitignore
├── backend/
│   ├── app.js
│   ├── config/
│   │   ├── database.js
│   │   └── jwt.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── comunicados.controller.js
│   │   ├── conceitos.controller.js
│   │   ├── disciplinas.controller.js
│   │   ├── faltas.controller.js
│   │   ├── notificacoes.controller.js
│   │   ├── turma.controller.js
│   │   └── usuarios.controller.js
│   ├── middleware/
│   │   └── auth.middleware.js
│   ├── models/
│   │   ├── comunicados.models.js
│   │   ├── conceitos.models.js
│   │   ├── disciplinas.models.js
│   │   ├── faltas.models.js
│   │   └── usuarios.models.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── comunicados.routes.js
│   │   ├── conceitos.routes.js
│   │   ├── disciplinas.routes.js
│   │   ├── faltas.routes.js
│   │   ├── notificacoes.routes.js
│   │   ├── turma.routes.js
│   │   └── usuarios.routes.js
│   └── package.json
├── LICENSE
└── README.md
```

## Instalação
1. Clone o repositório:
    ```sh
    git clone https://github.com/Carla-s-Romero/Projeto-de-P.I.git
    ```

2. Navegue até o diretório do projeto:
    ```sh
    cd Projeto-de-P.I
    ```
    
3. Instale as dependências:
    ```sh
    npm install
    ```

## Configuração
1. Crie um arquivo `.env` na raiz do diretório `backend` e adicione as seguintes variáveis de ambiente:
    ```env
    MONGO_URI=sua_string_de_conexão_mongodb
    JWT_SECRET=suaChaveSecretaJwt
    PORT=3000
    ```

## Uso
1. Inicie o servidor:
    ```sh
    npm start
    ```
2. O servidor estará rodando em `http://localhost:3000`.

## Endpoints Principais
- **Autenticação**
  - `POST /api/auth/registrar` - Registrar um novo usuário (requer autenticação)
  - `POST /api/auth/login` - Login de usuário

- **Usuários**
  - `GET /api/usuarios` - Obter todos os usuários (requer autenticação)
  - `GET /api/usuarios/:id` - Obter usuário por ID (requer autenticação)
  - `PUT /api/usuarios/:id` - Atualizar usuário por ID (requer autenticação)
  - `DELETE /api/usuarios/:id` - Deletar usuário por ID (requer autenticação)
  - `GET /api/usuarios/tipo/professores` - Obter todos os professores (requer autenticação)
  - `GET /api/usuarios/tipo/alunos` - Obter todos os alunos (requer autenticação)
  - `GET /api/usuarios/tipo/coordenadores` - Obter todos os coordenadores (requer autenticação)

- **Conceitos**
  - `GET /api/conceitos` - Obter todos os conceitos (requer autenticação)
  - `GET /api/conceitos/:id` - Obter conceito por ID (requer autenticação)
  - `POST /api/conceitos` - Criar um novo conceito (requer autenticação)
  - `PUT /api/conceitos/:id` - Atualizar conceito por ID (requer autenticação)
  - `DELETE /api/conceitos/:id` - Deletar conceito por ID (requer autenticação)
  - `GET /api/conceitos/:id/conceitos` - Obter conceitos por aluno (requer autenticação)

- **Comunicados**
  - `GET /api/comunicados` - Obter todos os comunicados (requer autenticação)
  - `GET /api/comunicados/:id` - Obter comunicado por ID (requer autenticação)
  - `POST /api/comunicados` - Criar um novo comunicado (requer autenticação)
  - `PUT /api/comunicados/:id` - Atualizar comunicado por ID (requer autenticação)
  - `DELETE /api/comunicados/:id` - Deletar comunicado por ID (requer autenticação)

- **Faltas**
  - `GET /api/faltas` - Obter todas as faltas (requer autenticação)
  - `GET /api/faltas/:id` - Obter falta por ID (requer autenticação)
  - `POST /api/faltas` - Criar uma nova falta (requer autenticação)
  - `PUT /api/faltas/:id` - Atualizar falta por ID (requer autenticação)
  - `DELETE /api/faltas/:id` - Deletar falta por ID (requer autenticação)
  - `GET /api/faltas/aluno/:id` - Obter faltas por aluno (requer autenticação)

## Licença
Este projeto está licenciado sob a licença ISC. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
