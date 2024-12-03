const express = require('express');
const turmasController = require('../controllers/turma.controller');
const authMiddleware = require('../middleware/auth.middleware');

const router = express.Router();


/**
 * @swagger
 * tags:
 *   name: Turmas
 *   description: Gerenciamento de turmas
 */

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
 *         description: Lista de turmas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: ID da turma
 *                   nome:
 *                     type: string
 *                     description: Nome da turma
 *                   codigo:
 *                     type: string
 *                     description: Código da turma
 *                   materia:
 *                     type: string
 *                     description: Matéria associada
 *                   turno:
 *                     type: string
 *                     description: Turno da turma
 *                   sala:
 *                     type: string
 *                     description: Sala da turma
 *                   professores:
 *                     type: array
 *                     items:
 *                       type: string
 *                     description: IDs dos professores
 *                   alunos:
 *                     type: array
 *                     items:
 *                       type: string
 *                     description: IDs dos alunos
 *       500:
 *         description: Erro ao obter as turmas
 */
router.get('/', authMiddleware, turmasController.getTurma);

/**
 * @swagger
 * /api/turmas/{id}:
 *   get:
 *     summary: Retorna uma turma específica
 *     tags: [Turmas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da turma
 *     responses:
 *       200:
 *         description: Dados da turma
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: ID da turma
 *                 nome:
 *                   type: string
 *                   description: Nome da turma
 *                 codigo:
 *                   type: string
 *                   description: Código da turma
 *                 materia:
 *                   type: string
 *                   description: Matéria associada
 *                 turno:
 *                   type: string
 *                   description: Turno da turma
 *                 sala:
 *                   type: string
 *                   description: Sala da turma
 *                 professores:
 *                   type: array
 *                   items:
 *                     type: string
 *                   description: IDs dos professores
 *                 alunos:
 *                   type: array
 *                   items:
 *                     type: string
 *                   description: IDs dos alunos
 *       404:
 *         description: Turma não encontrada
 *       500:
 *         description: Erro ao obter a turma
 */
router.get('/:id', authMiddleware, turmasController.getTurmaById);

/**
 * @swagger
 * /api/turmas:
 *   post:
 *     summary: Cria uma nova turma
 *     tags: [Turmas]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Nome da turma
 *               codigo:
 *                 type: string
 *                 description: Código da turma
 *               materia:
 *                 type: string
 *                 description: Matéria associada
 *               turno:
 *                 type: string
 *                 description: Turno da turma
 *               sala:
 *                 type: string
 *                 description: Sala da turma
 *               professores:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: IDs dos professores
 *               alunos:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: IDs dos alunos
 *     responses:
 *       201:
 *         description: Turma criada com sucesso
 *       400:
 *         description: Dados inválidos
 *       500:
 *         description: Erro ao criar a turma
 */
router.post('/', authMiddleware, turmasController.createTurma);

/**
 * @swagger
 * /api/turmas/{id}:
 *   put:
 *     summary: Atualiza uma turma
 *     tags: [Turmas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da turma
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               codigo:
 *                 type: string
 *               materia:
 *                 type: string
 *               turno:
 *                 type: string
 *               sala:
 *                 type: string
 *               professores:
 *                 type: array
 *                 items:
 *                   type: string
 *               alunos:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Turma atualizada com sucesso
 *       404:
 *         description: Turma não encontrada
 *       400:
 *         description: Dados inválidos
 *       500:
 *         description: Erro ao atualizar a turma
 */
router.put('/:id', authMiddleware, turmasController.updateTurma);

/**
 * @swagger
 * /api/turmas/{id}:
 *   delete:
 *     summary: Exclui uma turma
 *     tags: [Turmas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da turma
 *     responses:
 *       200:
 *         description: Turma excluída com sucesso
 *       404:
 *         description: Turma não encontrada
 *       500:
 *         description: Erro ao excluir a turma
 */
router.delete('/:id', authMiddleware, turmasController.deleteTurma);

/**
 * @swagger
 * /api/turmas/{id}/alunos:
 *   get:
 *     summary: Retorna todos os alunos de uma turma
 *     tags: [Turmas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da turma
 *     responses:
 *       200:
 *         description: Lista de alunos da turma
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: ID do aluno
 *                   nome:
 *                     type: string
 *                     description: Nome do aluno
 *                   email:
 *                     type: string
 *                     description: Email do aluno
 *                   matricula:
 *                     type: string
 *                     description: Número de matrícula do aluno
 *       404:
 *         description: Turma não encontrada
 *       500:
 *         description: Erro ao obter os alunos
 */
router.get('/:id/alunos', authMiddleware, turmasController.getAlunosByTurmaId);

//novas rotas

/**
 * @swagger
 * /api/turmas/{id}/add-aluno:
 *   post:
 *     summary: Adiciona um aluno a uma turma
 *     tags: [Turmas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da turma
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email do aluno a ser adicionado
 *     responses:
 *       201:
 *         description: Aluno adicionado à turma com sucesso
 *       400:
 *         description: Email inválido ou aluno não encontrado
 *       404:
 *         description: Turma ou aluno não encontrado
 *       500:
 *         description: Erro ao adicionar aluno à turma
 */
router.post('/:id/add-aluno', turmasController.addAlunotoTurma);

/**
 * @swagger
 * /api/turmas/{id}/remove-aluno/{alunoId}:
 *   delete:
 *     summary: Remove um aluno de uma turma
 *     tags: [Turmas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da turma
 *       - in: path
 *         name: alunoId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do aluno a ser removido
 *     responses:
 *       200:
 *         description: Aluno removido com sucesso
 *       404:
 *         description: Aluno ou turma não encontrado
 *       500:
 *         description: Erro ao remover aluno da turma
 */
router.delete('/:id/remove-aluno/:alunoId', turmasController.removeAlunofromTurma);
router.post('/:id/add-professor', turmasController.addProfessortoTurma);
router.delete('/:id/remove-professor/:professorId', turmasController.removeProfessorfromTurma);
router.get('/user/:userId', authMiddleware, turmasController.getTurmasByUserId);

module.exports = router;
