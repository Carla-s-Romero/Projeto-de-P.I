const express = require('express');
const router = express.Router();
const turmasController = require('../controllers/turma.controller');

//Add swagger - Testar
/**
 * @swagger
 * /api/turmas:
 *   get:
 *     summary: Retorna todas as turmas
 *     tags: [Turmas]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de todas as turmas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Turma'
 */
router.get('/', turmasController.getTurma);

/**
 * @swagger
 * /api/turmas/{id}:
 *   get:
 *     summary: Retorna uma turma pelo ID
 *     tags: [Turmas]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Turma encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Turma'
 */
router.get('/:id', turmasController.getTurmaById);

/**
 * @swagger
 * /api/turmas:
 *   post:
 *     summary: Cria uma nova turma
 *     tags: [Turmas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Turma'
 *     responses:
 *       201:
 *         description: Turma criada com sucesso
 */
router.post('/', turmasController.createTurma);

/**
 * @swagger
 * /api/turmas/{id}:
 *   put:
 *     summary: Atualiza uma turma pelo ID
 *     tags: [Turmas]
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
 *             $ref: '#/components/schemas/Turma'
 *     responses:
 *       200:
 *         description: Turma atualizada com sucesso
 */
router.put('/:id', turmasController.updateTurma);

/**
 * @swagger
 * /api/turmas/{id}:
 *   delete:
 *     summary: Deleta uma turma pelo ID
 *     tags: [Turmas]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Turma deletada com sucesso
 */
router.delete('/:id', turmasController.deleteTurma);

/**
 * @swagger
 * /api/turmas/{id}/alunos:
 *   get:
 *     summary: Retorna os alunos de uma turma pelo ID da turma
 *     tags: [Turmas]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de alunos da turma
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *                 description: ID do aluno
 */
router.get('/:id/alunos', turmasController.getAlunosByTurmaId);

/**
 * @swagger
 * /api/turmas/{id}/add-aluno:
 *   post:
 *     summary: Adiciona um aluno a uma turma
 *     tags: [Turmas]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *       - in: body
 *         name: alunoId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do aluno a ser adicionado
 *     responses:
 *       200:
 *         description: Aluno adicionado com sucesso
 */
router.post('/:id/add-aluno', turmasController.addAlunotoTurma);

/**
 * @swagger
 * /api/turmas/{id}/remove-aluno/{alunoId}:
 *   delete:
 *     summary: Remove um aluno de uma turma
 *     tags: [Turmas]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *       - name: alunoId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Aluno removido com sucesso
 */
router.delete('/:id/remove-aluno/:alunoId', turmasController.removeAlunofromTurma);

module.exports = router;

