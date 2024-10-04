const express = require('express');
const { 
    getNotificacao,
    getNotificacaoById,
    createNotificacao,
    updateNotificacao,
    deleteNotificacao
} = require('../controllers/notificacoes.controller');
const authMiddleware = require('../middleware/auth.middleware');
const router = express.Router();

//Add swagger - Testar
/**
 * @swagger
 * tags:
 *   name: Notificações
 *   description: Gerenciamento de notificações no sistema escolar
 */

/**
 * @swagger
 * /api/notificacoes:
 *   get:
 *     summary: Retorna todas as notificações
 *     tags: [Notificações]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de todas as notificações
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Notificacao'
 */
router.get('/', authMiddleware, getNotificacao);

/**
 * @swagger
 * /api/notificacoes/{id}:
 *   get:
 *     summary: Retorna uma notificação pelo ID
 *     tags: [Notificações]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Notificação encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Notificacao'
 *       404:
 *         description: Notificação não encontrada
 */
router.get('/:id', authMiddleware, getNotificacaoById);

/**
 * @swagger
 * /api/notificacoes:
 *   post:
 *     summary: Cria uma nova notificação
 *     tags: [Notificações]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Notificacao'
 *     responses:
 *       201:
 *         description: Notificação criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Notificacao'
 *       400:
 *         description: Dados inválidos
 */
router.post('/', authMiddleware, createNotificacao);

/**
 * @swagger
 * /api/notificacoes/{id}:
 *   put:
 *     summary: Atualiza uma notificação pelo ID
 *     tags: [Notificações]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Notificacao'
 *     responses:
 *       200:
 *         description: Notificação atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Notificacao'
 *       404:
 *         description: Notificação não encontrada
 */
router.put('/:id', authMiddleware, updateNotificacao);

/**
 * @swagger
 * /api/notificacoes/{id}:
 *   delete:
 *     summary: Exclui uma notificação pelo ID
 *     tags: [Notificações]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       204:
 *         description: Notificação excluída com sucesso
 *       404:
 *         description: Notificação não encontrada
 */
router.delete('/:id', authMiddleware, deleteNotificacao);

module.exports = router;
