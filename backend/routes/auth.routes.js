const express = require('express');
const { registrar, login } = require('../controllers/auth.controller');
const authMiddleware = require('../middleware/auth.middleware');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Gerenciamento de Autenticação
 */

/**
 * @swagger
 * /api/auth/registrar:
 *   post:
 *     summary: Registra um novo usuário no sistema.
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: [] # Indica que a autenticação é necessária
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - email
 *               - senha
 *               - tipo
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Nome completo do usuário.
 *               email:
 *                 type: string
 *                 description: Endereço de e-mail válido para o usuário.
 *               senha:
 *                 type: string
 *                 description: Senha de acesso ao sistema (mínimo de 6 caracteres).
 *               matricula:    
 *                 type: string
 *                 description: Número de matrícula do usuário (opcional).
 *               tipo:
 *                 type: string
 *                 enum: [aluno, professor, coordenador]
 *                 description: Tipo de usuário no sistema.
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Usuário registrado com sucesso.
 *       400:
 *         description: Dados inválidos na requisição.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Campos obrigatórios não preenchidos.
 *       401:
 *         description: Não autorizado. Token de autenticação ausente ou inválido.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Token de autenticação inválido.
 */
router.post('/registrar', authMiddleware, registrar);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Realiza login de um usuário.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - senha
 *             properties:
 *               email:
 *                 type: string
 *                 description: Endereço de e-mail registrado do usuário.
 *               senha:
 *                 type: string
 *                 description: Senha correspondente ao e-mail informado.
 *     responses:
 *       200:
 *         description: Usuário logado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Token JWT gerado para autenticação futura.
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       401:
 *         description: Credenciais inválidas (e-mail ou senha incorretos).
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Usuário ou senha incorretos.
 */
router.post('/login', login);

module.exports = router;
