const express = require('express');
const { getUsuarios, getUsuarioById, updateUsuario, deleteUsuario, getProfessores, getAlunos, getCoordenadores } = require('../controllers/usuarios.controller');
const authMiddleware = require('../middleware/auth.middleware');
const router = express.Router();

//Todas as rotas estão funcionando perfeitamente :)

/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Gerenciamento de usuários no sistema
 */

/**
 * @swagger
 * /api/usuarios:
 *   get:
 *     summary: Retorna todos os usuários
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: [] # Indica que a autenticação é necessária
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: ID do usuário
 *                   nome:
 *                     type: string
 *                     description: Nome do usuário
 *                   email:
 *                     type: string
 *                     description: Email do usuário
 *                   tipo:
 *                     type: string
 *                     enum: [aluno, professor, coordenador]
 *                     description: Tipo do usuário
 *       500:
 *         description: Erro ao obter os usuários
 */
router.get('/', authMiddleware, getUsuarios);

/**
 * @swagger
 * /api/usuarios/{id}:
 *   get:
 *     summary: Retorna um usuário específico
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Dados do usuário
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 nome:
 *                   type: string
 *                 email:
 *                   type: string
 *                 tipo:
 *                   type: string
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro ao obter o usuário
 */
router.get('/:id', authMiddleware, getUsuarioById);

/**
 * @swagger
 * /api/usuarios/{id}:
 *   put:
 *     summary: Atualiza um usuário
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               tipo:
 *                 type: string
 *                 enum: [aluno, professor, coordenador]
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro ao atualizar o usuário
 */
router.put('/:id', authMiddleware, updateUsuario);

/**
 * @swagger
 * /api/usuarios/{id}:
 *   delete:
 *     summary: Remove um usuário
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Usuário removido com sucesso
 *       500:
 *         description: Erro ao remover o usuário
 */
router.delete('/:id', authMiddleware, deleteUsuario);

/**
 * @swagger
 * /api/usuarios/professores:
 *   get:
 *     summary: Retorna todos os professores
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de professores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   nome:
 *                     type: string
 *                   email:
 *                     type: string
 *       500:
 *         description: Erro ao obter os professores
 */
router.get('/tipo/professores', authMiddleware, getProfessores);

/**
 * @swagger
 * /api/usuarios/alunos:
 *   get:
 *     summary: Retorna todos os alunos
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de alunos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   nome:
 *                     type: string
 *                   email:
 *                     type: string
 *       500:
 *         description: Erro ao obter os alunos
 */
router.get('/tipo/alunos', authMiddleware, getAlunos);

/**
 * @swagger
 * /api/usuarios/coordenadores:
 *   get:
 *     summary: Retorna todos os coordenadores
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de coordenadores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   nome:
 *                     type: string
 *                   email:
 *                     type: string
 *       500:
 *         description: Erro ao obter os coordenadores
 */
router.get('/tipo/coordenadores', authMiddleware, getCoordenadores);

module.exports = router;
