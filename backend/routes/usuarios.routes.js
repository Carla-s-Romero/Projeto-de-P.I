const express = require('express');
const { getUsuarios, getUsuarioById, updateUsuario, deleteUsuario, getProfessores, getAlunos, getCoordenadores } = require('../controllers/usuarios.controller');
const authMiddleware = require('../middleware/auth.middleware');
const router = express.Router();
//Add swagger - Testar
/**
 * @swagger
 * /api/usuarios:
 *   get:
 *     summary: Retorna a lista de todos os usuários
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'
 */
router.get('/', authMiddleware, getUsuarios);

/**
 * @swagger
 * /api/usuarios/{id}:
 *   get:
 *     summary: Retorna um usuário pelo ID
 *     tags: [Usuarios]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 */
router.get('/:id', authMiddleware, getUsuarioById);

/**
 * @swagger
 * /api/usuarios/{id}:
 *   put:
 *     summary: Atualiza um usuário
 *     tags: [Usuarios]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       200:
 *         description: Usuário atualizado
 */
router.put('/:id', authMiddleware, updateUsuario);

/**
 * @swagger
 * /api/usuarios/{id}:
 *   delete:
 *     summary: Deleta um usuário
 *     tags: [Usuarios]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuário deletado
 */
router.delete('/:id', authMiddleware, deleteUsuario);

/**
 * @swagger
 * /api/usuarios/tipo/professores:
 *   get:
 *     summary: Retorna a lista de professores
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de professores
 */
router.get('/tipo/professores', authMiddleware, getProfessores);

/**
 * @swagger
 * /api/usuarios/tipo/alunos:
 *   get:
 *     summary: Retorna a lista de alunos
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de alunos
 */
router.get('/tipo/alunos', authMiddleware, getAlunos);

/**
 * @swagger
 * /api/usuarios/tipo/coordenadores:
 *   get:
 *     summary: Retorna a lista de coordenadores
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de coordenadores
 */
router.get('/tipo/coordenadores', authMiddleware, getCoordenadores);

module.exports = router;

