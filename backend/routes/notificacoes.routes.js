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

/**
 * @swagger
 * tags:
 *   name: Notificacoes
 *   description: Gerenciamento de notificações
 */

/**
 * @swagger
 * /api/notificacoes:
 *   get:
 *     summary: Retorna todas as notificações
 *     tags: [Notificacoes]
 *     security:
 *       - bearerAuth: [] # Indica que a autenticação é necessária
 *     responses:
 *       200:
 *         description: Lista de notificações
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: ID da notificação
 *                   mensagem:
 *                     type: string
 *                     description: Mensagem da notificação
 *                   data:
 *                     type: string
 *                     format: date-time
 *                     description: Data da notificação
 *                   importancia:
 *                     type: string
 *                     enum: [Importante]
 *                     description: Importância da notificação
 *                   autor:
 *                     type: string
 *                     description: ID do autor
 *       500:
 *         description: Erro ao obter as notificações
 */
router.get('/', authMiddleware, getNotificacao);

/**
 * @swagger
 * /api/notificacoes/{id}:
 *   get:
 *     summary: Retorna uma notificação específica
 *     tags: [Notificacoes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da notificação
 *     responses:
 *       200:
 *         description: Dados da notificação
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 mensagem:
 *                   type: string
 *                 data:
 *                   type: string
 *                   format: date-time
 *                 importancia:
 *                   type: string
 *                 autor:
 *                   type: string
 *       404:
 *         description: Notificação não encontrada
 *       500:
 *         description: Erro ao obter a notificação
 */
router.get('/:id', authMiddleware, getNotificacaoById);

/**
 * @swagger
 * /api/notificacoes:
 *   post:
 *     summary: Cria uma nova notificação
 *     tags: [Notificacoes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mensagem:
 *                 type: string
 *                 description: Mensagem da notificação
 *               data:
 *                 type: string
 *                 format: date-time
 *                 description: Data da notificação
 *               importancia:
 *                 type: string
 *                 enum: [Importante]
 *                 description: Nível de importância
 *               autor:
 *                 type: string
 *                 description: ID do autor
 *     responses:
 *       201:
 *         description: Notificação criada com sucesso
 *       400:
 *         description: Dados inválidos
 *       500:
 *         description: Erro ao criar a notificação
 */
router.post('/', authMiddleware, createNotificacao);

/**
 * @swagger
 * /api/notificacoes/{id}:
 *   put:
 *     summary: Atualiza uma notificação
 *     tags: [Notificacoes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da notificação
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mensagem:
 *                 type: string
 *               data:
 *                 type: string
 *                 format: date-time
 *               importancia:
 *                 type: string
 *                 enum: [Importante]
 *               autor:
 *                 type: string
 *     responses:
 *       200:
 *         description: Notificação atualizada com sucesso
 *       404:
 *         description: Notificação não encontrada
 *       400:
 *         description: Dados inválidos
 *       500:
 *         description: Erro ao atualizar a notificação
 */
router.put('/:id', authMiddleware, updateNotificacao);

/**
 * @swagger
 * /api/notificacoes/{id}:
 *   delete:
 *     summary: Exclui uma notificação
 *     tags: [Notificacoes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da notificação
 *     responses:
 *       200:
 *         description: Notificação excluída com sucesso
 *       404:
 *         description: Notificação não encontrada
 *       500:
 *         description: Erro ao excluir a notificação
 */
router.delete('/:id', authMiddleware, deleteNotificacao);

module.exports = router;
