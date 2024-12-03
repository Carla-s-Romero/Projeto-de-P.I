const express = require('express');
const { 
    getComunicado,
    getComunicadoByTurma,
    getComunicadoById,
    createComunicado,
    updateComunicado,
    deleteComunicado
} = require('../controllers/comunicados.controller');
const authMiddleware = require('../middleware/auth.middleware');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Comunicados
 *   description: Endpoints para gerenciamento de comunicados.
 */

/**
 * @swagger
 * /api/comunicados:
 *   get:
 *     summary: Retorna todos os comunicados.
 *     tags: [Comunicados]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de comunicados retornada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID único do comunicado.
 *                     example: "64f8efcfb8f4f2c9d5e4a123"
 *                   mensagem:
 *                     type: string
 *                     description: Mensagem do comunicado.
 *                     example: "Reunião importante para a turma."
 *                   data:
 *                     type: string
 *                     format: date-time
 *                     description: Data de criação do comunicado.
 *                     example: "2024-11-27T14:00:00.000Z"
 *                   turmas:
 *                     type: string
 *                     description: ID da turma associada.
 *                     example: "64f8e123b8f4f2c9d5e4a789"
 *                   autor:
 *                     type: string
 *                     description: ID do autor do comunicado.
 *                     example: "64f8e456b8f4f2c9d5e4a111"
 *       401:
 *         description: Não autorizado. Token ausente ou inválido.
 */
router.get('/', authMiddleware, getComunicado);

/**
 * @swagger
 * /api/comunicados/{id}:
 *   get:
 *     summary: Retorna um comunicado pelo ID.
 *     tags: [Comunicados]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do comunicado.
 *     responses:
 *       200:
 *         description: Comunicado encontrado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID único do comunicado.
 *                   example: "64f8efcfb8f4f2c9d5e4a123"
 *                 mensagem:
 *                   type: string
 *                   description: Mensagem do comunicado.
 *                   example: "Reunião importante para a turma."
 *                 data:
 *                   type: string
 *                   format: date-time
 *                   description: Data de criação do comunicado.
 *                   example: "2024-11-27T14:00:00.000Z"
 *                 turmas:
 *                   type: string
 *                   description: ID da turma associada.
 *                   example: "64f8e123b8f4f2c9d5e4a789"
 *                 autor:
 *                   type: string
 *                   description: ID do autor do comunicado.
 *                   example: "64f8e456b8f4f2c9d5e4a111"
 *       404:
 *         description: Comunicado não encontrado.
 *       401:
 *         description: Não autorizado. Token ausente ou inválido.
 */
router.get('/:id', authMiddleware, getComunicadoById);

/**
 * @swagger
 * /api/comunicados/turma/{turmaId}:
 *   get:
 *     summary: Retorna comunicados de uma turma específica.
 *     tags: [Comunicados]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: turmaId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da turma.
 *     responses:
 *       200:
 *         description: Lista de comunicados da turma retornada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                 id:
 *                   type: string
 *                   description: ID único do comunicado.
 *                   example: "64f8efcfb8f4f2c9d5e4a123"
 *                 mensagem:
 *                   type: string
 *                   description: Mensagem do comunicado.
 *                   example: "Reunião importante para a turma."
 *                 data:
 *                   type: string
 *                   format: date-time
 *                   description: Data de criação do comunicado.
 *                   example: "2024-11-27T14:00:00.000Z"
 *                 turmas:
 *                   type: string
 *                   description: ID da turma associada.
 *                   example: "64f8e123b8f4f2c9d5e4a789"
 *                 autor:
 *                   type: string
 *                   description: ID do autor do comunicado.
 *                   example: "64f8e456b8f4f2c9d5e4a111"
 *       404:
 *         description: Nenhum comunicado encontrado para a turma.
 *       401:
 *         description: Não autorizado. Token ausente ou inválido.
 */
router.get('/turma/:turmaId', authMiddleware, getComunicadoByTurma);

/**
 * @swagger
 * /api/comunicados:
 *   post:
 *     summary: Cria um novo comunicado.
 *     tags: [Comunicados]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - mensagem
 *               - turmas
 *               - autor
 *             properties:
 *               mensagem:
 *                 type: string
 *                 description: Mensagem do comunicado.
 *                 example: "Reunião importante para a turma."
 *               turmas:
 *                 type: string
 *                 description: ID da turma associada.
 *                 example: "64f8e123b8f4f2c9d5e4a789"
 *               autor:
 *                 type: string
 *                 description: ID do autor do comunicado.
 *                 example: "64f8e456b8f4f2c9d5e4a111"
 *     responses:
 *       201:
 *         description: Comunicado criado com sucesso.
 *       400:
 *         description: Dados inválidos na requisição.
 *       401:
 *         description: Não autorizado. Token ausente ou inválido.
 */
router.post('/', authMiddleware, createComunicado);

/**
 * @swagger
 * /api/comunicados/{id}:
 *   put:
 *     summary: Atualiza um comunicado pelo ID.
 *     tags: [Comunicados]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do comunicado a ser atualizado.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mensagem:
 *                 type: string
 *                 description: Novo texto da mensagem do comunicado.
 *                 example: "Reunião reagendada para amanhã."
 *               turmas:
 *                 type: string
 *                 description: Novo ID da turma associada.
 *                 example: "64f8e123b8f4f2c9d5e4a789"
 *     responses:
 *       200:
 *         description: Comunicado atualizado com sucesso.
 *       404:
 *         description: Comunicado não encontrado.
 *       401:
 *         description: Não autorizado. Token ausente ou inválido.
 */
router.put('/:id', authMiddleware, updateComunicado);

/**
 * @swagger
 * /api/comunicados/{id}:
 *   delete:
 *     summary: Remove um comunicado pelo ID.
 *     tags: [Comunicados]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do comunicado a ser removido.
 *     responses:
 *       200:
 *         description: Comunicado removido com sucesso.
 *       404:
 *         description: Comunicado não encontrado.
 *       401:
 *         description: Não autorizado. Token ausente ou inválido.
 */
router.delete('/:id', authMiddleware, deleteComunicado);

module.exports = router;
