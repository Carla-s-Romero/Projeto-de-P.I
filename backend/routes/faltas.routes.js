const express = require('express');
const { 
    getFalta,
    getFaltaById,
    getFaltaByAluno,
    createFalta,
    updateFalta,
    deleteFalta
} = require('../controllers/faltas.controller');
const authMiddleware = require('../middleware/auth.middleware');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Faltas
 *   description: Gerenciamento de faltas de alunos.
 */

/**
 * @swagger
 * /api/faltas:
 *   get:
 *     summary: Retorna todas as faltas.
 *     tags: [Faltas]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de faltas retornada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: ID da falta.
 *                   data:
 *                     type: string
 *                     format: date-time
 *                     description: Data da falta.
 *                   disciplina:
 *                     type: string
 *                     description: ID da disciplina.
 *                   aluno:
 *                     type: string
 *                     description: ID do aluno.
 *       500:
 *         description: Erro interno do servidor.
 */
router.get('/', authMiddleware, getFalta);

/**
 * @swagger
 * /api/faltas/{id}:
 *   get:
 *     summary: Retorna uma falta específica.
 *     tags: [Faltas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da falta.
 *     responses:
 *       200:
 *         description: Falta retornada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 data:
 *                   type: string
 *                   format: date-time
 *                 disciplina:
 *                   type: string
 *                 aluno:
 *                   type: string
 *       404:
 *         description: Falta não encontrada.
 *       500:
 *         description: Erro interno do servidor.
 */
router.get('/:id', authMiddleware, getFaltaById);

/**
 * @swagger
 * /api/faltas/aluno/{id}:
 *   get:
 *     summary: Retorna todas as faltas de um aluno específico.
 *     tags: [Faltas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do aluno.
 *     responses:
 *       200:
 *         description: Lista de faltas retornada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   data:
 *                     type: string
 *                     format: date-time
 *                   disciplina:
 *                     type: string
 *                   aluno:
 *                     type: string
 *       404:
 *         description: Faltas não encontradas para o aluno.
 *       500:
 *         description: Erro interno do servidor.
 */
router.get('/aluno/:id/', authMiddleware, getFaltaByAluno);

/**
 * @swagger
 * /api/faltas:
 *   post:
 *     summary: Cria uma nova falta.
 *     tags: [Faltas]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               data:
 *                 type: string
 *                 format: date-time
 *               disciplina:
 *                 type: string
 *               aluno:
 *                 type: string
 *     responses:
 *       201:
 *         description: Falta criada com sucesso.
 *       400:
 *         description: Erro na requisição.
 *       500:
 *         description: Erro interno do servidor.
 */
router.post('/', authMiddleware, createFalta);

/**
 * @swagger
 * /api/faltas/{id}:
 *   put:
 *     summary: Atualiza uma falta existente.
 *     tags: [Faltas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da falta.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               data:
 *                 type: string
 *                 format: date-time
 *               disciplina:
 *                 type: string
 *               aluno:
 *                 type: string
 *     responses:
 *       200:
 *         description: Falta atualizada com sucesso.
 *       400:
 *         description: Erro na requisição.
 *       404:
 *         description: Falta não encontrada.
 *       500:
 *         description: Erro interno do servidor.
 */
router.put('/:id', authMiddleware, updateFalta);

/**
 * @swagger
 * /api/faltas/{id}:
 *   delete:
 *     summary: Remove uma falta existente.
 *     tags: [Faltas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da falta.
 *     responses:
 *       200:
 *         description: Falta removida com sucesso.
 *       404:
 *         description: Falta não encontrada.
 *       500:
 *         description: Erro interno do servidor.
 */
router.delete('/:id', authMiddleware, deleteFalta);

module.exports = router;