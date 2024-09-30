const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
//const swaggerSetup = require('./docs/swagger');

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
(async () => {
    try {
      const { primeiroAdmin } = require('./controllers/auth.controller');
      const Usuarios = require('./models/usuarios.models');
      
      const adminExists = await Usuarios.findOne({ email: 'primeiro@admin.com' });
      if (!adminExists) {
        const response = await primeiroAdmin({
          nome: 'Admin',
          email: 'primeiro@admin.com',
          senha: 'senhaSegura456',
          matricula: '001',
          tipo: 'coordenador',
        });
        if (response.status === 'success') {
          console.log(response.message);
        } else {
          console.error('Erro ao criar usuário administrador:', response.message);
        }
      } else {
        console.log('Usuário administrador já existe.');
      }
    } catch (error) {
      console.error('Erro ao criar usuário administrador:', error.message);
    }
  })();

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
//swaggerSetup(app);
// http://localhost:3000/api-docs


// Configuração da Porta
const PORT = process.env.PORT || 3000;

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
