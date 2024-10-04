const express = require('express');
const router = express.Router();
const disciplinasController = require('../controllers/disciplinas.controller');

//Add swagger - Testar
/**
 * @swagger
 * tags:
 *   name: Disciplinas
 *   description: Gerenciamento de disciplinas no sistema escolar
 */

/**
 * @swagger
 * /api/disciplinas:
 *   get:
 *     summary: Retorna todas as disciplinas
 *     tags: [Disciplinas]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de todas as disciplinas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Disciplina'
 */
router.get('/', disciplinasController.getDisciplina);

/**
 * @swagger
 * /api/disciplinas/{id}:
 *   get:
 *     summary: Retorna uma disciplina pelo ID
 *     tags: [Disciplinas]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Disciplina encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Disciplina'
 *       404:
 *         description: Disciplina não encontrada
 */
router.get('/:id', disciplinasController.getDisciplinaById);

/**
 * @swagger
 * /api/disciplinas:
 *   post:
 *     summary: Cria uma nova disciplina
 *     tags: [Disciplinas]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Disciplina'
 *     responses:
 *       201:
 *         description: Disciplina criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Disciplina'
 *       400:
 *         description: Dados inválidos
 */
router.post('/', disciplinasController.createDisciplina);

/**
 * @swagger
 * /api/disciplinas/{id}:
 *   put:
 *     summary: Atualiza uma disciplina pelo ID
 *     tags: [Disciplinas]
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
 *             $ref: '#/components/schemas/Disciplina'
 *     responses:
 *       200:
 *         description: Disciplina atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Disciplina'
 *       404:
 *         description: Disciplina não encontrada
 */
router.put('/:id', disciplinasController.updateDisciplina);

/**
 * @swagger
 * /api/disciplinas/{id}:
 *   delete:
 *     summary: Exclui uma disciplina pelo ID
 *     tags: [Disciplinas]
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
 *         description: Disciplina excluída com sucesso
 *       404:
 *         description: Disciplina não encontrada
 */
router.delete('/:id', disciplinasController.deleteDisciplina);

/**
 * @swagger
 * /api/disciplinas/{id}/add-professor:
 *   post:
 *     summary: Adiciona um professor a uma disciplina
 *     tags: [Disciplinas]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *       - name: professorId
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Professor adicionado com sucesso
 *       404:
 *         description: Disciplina ou professor não encontrado
 */
router.post('/:id/add-professor', disciplinasController.addProfessortoDisciplina);

/**
 * @swagger
 * /api/disciplinas/{id}/remove-professor/{professorId}:
 *   delete:
 *     summary: Remove um professor de uma disciplina
 *     tags: [Disciplinas]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *       - name: professorId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Professor removido com sucesso
 *       404:
 *         description: Disciplina ou professor não encontrado
 */
router.delete('/:id/remove-professor/:professorId', disciplinasController.removeProfessorfromDisciplina);

/**
 * @swagger
 * /api/disciplinas/{id}/add-turma/{turmaId}:
 *   post:
 *     summary: Adiciona uma turma a uma disciplina
 *     tags: [Disciplinas]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *       - name: turmaId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Turma adicionada com sucesso
 *       404:
 *         description: Disciplina ou turma não encontrada
 */
router.post('/:id/add-turma/:turmaId', disciplinasController.addTurmatoDisciplina);

/**
 * @swagger
 * /api/disciplinas/{id}/remove-turma/{turmaId}:
 *   delete:
 *     summary: Remove uma turma de uma disciplina
 *     tags: [Disciplinas]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *       - name: turmaId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Turma removida com sucesso
 *       404:
 *         description: Disciplina ou turma não encontrada
 */
router.delete('/:id/remove-turma/:turmaId', disciplinasController.removeTurmafromDisciplina);

module.exports = router;

