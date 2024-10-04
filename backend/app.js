const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
//const swaggerSetup = require('./docs/swagger');
// Swagger setup
const setupSwaggerDocs = require('./swagger');
// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

// Conectar ao banco de dados
connectDB();

// Inicializar o aplicativo Express
const app = express();

// Middleware de segurança
app.use(helmet());

// Middleware para habilitar CORS
app.use(cors());

// Middleware para log de requisições
app.use(morgan('dev'));

// Middleware para parsing de JSON
app.use(express.json());

// Middleware para parsing de dados de formulários
app.use(express.urlencoded({ extended: true }));

// Criar um usuario administrador quando o sistema é iniciado, para que o primeiro usuario do sistema possa fazer algo
const { primeiroAdmin } = require('./controllers/auth.controller');
primeiroAdmin();

// Rotas
const usuariosRoute = require('./routes/usuarios.routes');
const turmasRoute = require('./routes/turmas.routes');
const disciplinasRoute = require('./routes/disciplinas.routes');
const authRoute = require('./routes/auth.routes');
const comunicadosRoute = require('./routes/comunicados.routes');
const notificacoesRoute = require('./routes/notificacoes.routes');
app.use('/api/usuarios', usuariosRoute);
app.use('/api/turmas', turmasRoute);
app.use('/api/disciplinas', disciplinasRoute);
app.use('/api/auth', authRoute);
app.use('/api/comunicados', comunicadosRoute);
app.use('/api/notificacoes', notificacoesRoute);

// Configuração do Swagger
swaggerSetup(app);   //Testar swagger
// Swagger options
const swaggerOptions = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'API Sistema Escolar',
        description: 'API de gerenciamento de usuários para um sistema escolar',
        version: '1.0.0',
        contact: {
          name: 'Suporte',
        },
        servers: [{ url: 'http://localhost:3000' }],
      },
      components: {
        schemas: {
            //Turma
            Turma: {
                type: 'object',
                properties: {
                  id: {
                    type: 'string',
                    description: 'ID da turma',
                  },
                  nome: {
                    type: 'string',
                    description: 'Nome da turma',
                  },
                  ano: {
                    type: 'integer',
                    description: 'Ano da turma',
                  },
                  alunos: {
                    type: 'array',
                    items: {
                      type: 'string',
                      description: 'Lista de IDs dos alunos na turma',
                    },
                  },
                },
                required: ['nome', 'ano'],
              },
              
        //Usuario
          Usuario: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                description: 'ID do usuário',
              },
              nome: {
                type: 'string',
                description: 'Nome do usuário',
              },
              email: {
                type: 'string',
                description: 'Email do usuário',
              },
              tipo: {
                type: 'string',
                enum: ['aluno', 'professor', 'coordenador'],
                description: 'Tipo de usuário (aluno, professor, coordenador)',
              },
              ativo: {
                type: 'boolean',
                description: 'Status do usuário (ativo ou inativo)',
              },
            },
            required: ['nome', 'email', 'tipo'],  // Campos obrigatórios
          },
        },
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
      security: [
        {
          bearerAuth: [],
        },
      ],
    },
    apis: ['./routes/*.js'],  // Caminho para os arquivos onde estão as rotas
  };
  
  
  // Swagger docs
  const swaggerDocs = swaggerJsDoc(swaggerOptions);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  
  // Middlewares
  app.use(express.json());
  app.use('/api/usuarios', usuariosRoutes);
  
  // Conectar ao MongoDB e iniciar servidor
  mongoose.connect('mongodb://localhost:27017/escola', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('MongoDB conectado...');
      app.listen(3000, () => {
        console.log('Servidor rodando na porta 3000');
      });
    })
    .catch(err => console.log(err));
// http://localhost:3000/api-docs


// Configuração da Porta
const PORT = process.env.PORT || 3000;

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
