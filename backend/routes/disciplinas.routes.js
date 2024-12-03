const express = require('express');
const router = express.Router();
const disciplinasController = require('../controllers/disciplinas.controller');

/**
 * @swagger
 * tags:
 *   name: Disciplinas
 *   description: Gerenciamento de disciplinas no sistema.
 */

/**
 * @swagger
 * /api/disciplinas:
 *   get:
 *     summary: Retorna todas as disciplinas.
 *     tags: [Disciplinas]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de disciplinas retornada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID único da disciplina.
 *                     example: "64f8e9cfb8f4f2c9d5e4b567"
 *                   nome:
 *                     type: string
 *                     description: Nome da disciplina.
 *                     example: "Matemática"
 *                   descricao:
 *                     type: string
 *                     description: Descrição da disciplina.
 *                     example: "Disciplina que abrange conceitos básicos e avançados de matemática."
 *                   professores:
 *                     type: array
 *                     items:
 *                       type: string
 *                     description: IDs dos professores responsáveis.
 *                     example: ["64f8e123b8f4f2c9d5e4a789", "64f8e456b8f4f2c9d5e4b123"]
 *                   turmas:
 *                     type: array
 *                     items:
 *                       type: string
 *                     description: IDs das turmas associadas à disciplina.
 *                     example: ["64f8eabc123f4f2c9d5e4a890"]
 *       401:
 *         description: Não autorizado. Token ausente ou inválido.
 */
router.get('/', disciplinasController.getDisciplina);

/**
 * @swagger
 * /api/disciplinas/{id}:
 *   get:
 *     summary: Retorna uma disciplina pelo ID.
 *     tags: [Disciplinas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da disciplina.
 *     responses:
 *       200:
 *         description: Disciplina encontrada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID único da disciplina.
 *                   example: "64f8e9cfb8f4f2c9d5e4b567"
 *                 nome:
 *                   type: string
 *                   description: Nome da disciplina.
 *                   example: "Matemática"
 *                 descricao:
 *                   type: string
 *                   description: Descrição da disciplina.
 *                   example: "Disciplina que abrange conceitos básicos e avançados de matemática."
 *                 professores:
 *                   type: array
 *                   items:
 *                     type: string
 *                   description: IDs dos professores responsáveis.
 *                   example: ["64f8e123b8f4f2c9d5e4a789", "64f8e456b8f4f2c9d5e4b123"]
 *                 turmas:
 *                   type: array
 *                   items:
 *                     type: string
 *                   description: IDs das turmas associadas à disciplina.
 *                   example: ["64f8eabc123f4f2c9d5e4a890"]
 *       404:
 *         description: Disciplina não encontrada.
 *       401:
 *         description: Não autorizado. Token ausente ou inválido.
 */
router.get('/:id', disciplinasController.getDisciplinaById);

/**
 * @swagger
 * /api/disciplinas:
 *   post:
 *     summary: Cria uma nova disciplina.
 *     tags: [Disciplinas]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - turmas
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Nome da disciplina.
 *                 example: "Física"
 *               descricao:
 *                 type: string
 *                 description: Descrição da disciplina.
 *                 example: "Estudo das propriedades da matéria e energia."
 *               professores:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: IDs dos professores responsáveis.
 *                 example: ["64f8e123b8f4f2c9d5e4a789"]
 *               turmas:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: IDs das turmas associadas à disciplina.
 *                 example: ["64f8eabc123f4f2c9d5e4a890"]
 *     responses:
 *       201:
 *         description: Disciplina criada com sucesso.
 *       400:
 *         description: Dados inválidos.
 *       401:
 *         description: Não autorizado. Token ausente ou inválido.
 */
router.post('/', disciplinasController.createDisciplina);

/**
 * @swagger
 * /api/disciplinas/{id}:
 *   put:
 *     summary: Atualiza uma disciplina pelo ID.
 *     tags: [Disciplinas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da disciplina.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Nome da disciplina.
 *                 example: "Física Avançada"
 *               descricao:
 *                 type: string
 *                 description: Descrição da disciplina.
 *                 example: "Estudo avançado das propriedades da matéria e energia."
 *               professores:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: IDs dos professores responsáveis.
 *                 example: ["64f8e123b8f4f2c9d5e4a789"]
 *               turmas:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: IDs das turmas associadas à disciplina.
 *                 example: ["64f8eabc123f4f2c9d5e4a890"]
 *     responses:
 *       200:
 *         description: Disciplina atualizada com sucesso.
 *       404:
 *         description: Disciplina não encontrada.
 *       401:
 *         description: Não autorizado. Token ausente ou inválido.
 */
router.put('/:id', disciplinasController.updateDisciplina);

/**
 * @swagger
 * /api/disciplinas/{id}:
 *   delete:
 *     summary: Remove uma disciplina pelo ID.
 *     tags: [Disciplinas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da disciplina.
 *     responses:
 *       200:
 *         description: Disciplina removida com sucesso.
 *       404:
 *         description: Disciplina não encontrada.
 *       401:
 *         description: Não autorizado. Token ausente ou inválido.
 */
router.delete('/:id', disciplinasController.deleteDisciplina);

module.exports = router;
