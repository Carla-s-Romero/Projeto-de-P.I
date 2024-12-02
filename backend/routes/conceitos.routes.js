const express = require('express');
const { 
    getConceito,
    getConceitoById,
    createConceito,
    updateConceito,
    deleteConceito,
    getConceitosByAluno
} = require('../controllers/conceitos.controller');
const authMiddleware = require('../middleware/auth.middleware');
const router = express.Router();


/**
 * @swagger
 * tags:
 *   name: Conceitos
 *   description: Gerenciamento de conceitos atribuídos aos alunos.
 */

/**
 * @swagger
 * /api/conceitos:
 *   get:
 *     summary: Retorna todos os conceitos.
 *     tags: [Conceitos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de conceitos retornada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID único do conceito.
 *                     example: "64f8e9cfb8f4f2c9d5e4b567"
 *                   aluno:
 *                     type: string
 *                     description: ID do aluno associado.
 *                     example: "64f8e123b8f4f2c9d5e4a789"
 *                   disciplina:
 *                     type: string
 *                     description: Nome ou ID da disciplina associada.
 *                     example: "Matemática"
 *                   unidade:
 *                     type: integer
 *                     description: Unidade de avaliação.
 *                     example: 1
 *                   av1:
 *                     type: number
 *                     format: float
 *                     description: Nota da primeira avaliação.
 *                     example: 7.5
 *                   av2:
 *                     type: number
 *                     format: float
 *                     description: Nota da segunda avaliação.
 *                     example: 8.0
 *                   noa:
 *                     type: number
 *                     format: float
 *                     description: Nota de outras atividades.
 *                     example: 6.5
 *       401:
 *         description: Não autorizado. Token ausente ou inválido.
 */
router.get('/', authMiddleware, getConceito);

/**
 * @swagger
 * /api/conceitos/{id}:
 *   get:
 *     summary: Retorna um conceito pelo ID.
 *     tags: [Conceitos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do conceito.
 *     responses:
 *       200:
 *         description: Conceito encontrado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID único do conceito.
 *                   example: "64f8e9cfb8f4f2c9d5e4b567"
 *                 aluno:
 *                   type: string
 *                   description: ID do aluno associado.
 *                   example: "64f8e123b8f4f2c9d5e4a789"
 *                 disciplina:
 *                   type: string
 *                   description: Nome ou ID da disciplina associada.
 *                   example: "Matemática"
 *                 unidade:
 *                   type: integer
 *                   description: Unidade de avaliação.
 *                   example: 1
 *                 av1:
 *                   type: number
 *                   format: float
 *                   description: Nota da primeira avaliação.
 *                   example: 7.5
 *                 av2:
 *                   type: number
 *                   format: float
 *                   description: Nota da segunda avaliação.
 *                   example: 8.0
 *                 noa:
 *                   type: number
 *                   format: float
 *                   description: Nota de outras atividades.
 *                   example: 6.5
 *       404:
 *         description: Conceito não encontrado.
 *       401:
 *         description: Não autorizado. Token ausente ou inválido.
 */
router.get('/:id', authMiddleware, getConceitoById);

/**
 * @swagger
 * /api/conceitos:
 *   post:
 *     summary: Cria um novo conceito.
 *     tags: [Conceitos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - aluno
 *               - disciplina
 *               - unidade
 *               - av1
 *               - av2
 *               - noa
 *             properties:
 *               aluno:
 *                 type: string
 *                 description: ID do aluno.
 *                 example: "64f8e123b8f4f2c9d5e4a789"
 *               disciplina:
 *                 type: string
 *                 description: Nome ou ID da disciplina.
 *                 example: "Matemática"
 *               unidade:
 *                 type: integer
 *                 description: Unidade de avaliação.
 *                 example: 1
 *               av1:
 *                 type: number
 *                 format: float
 *                 description: Nota da primeira avaliação.
 *                 example: 7.5
 *               av2:
 *                 type: number
 *                 format: float
 *                 description: Nota da segunda avaliação.
 *                 example: 8.0
 *               noa:
 *                 type: number
 *                 format: float
 *                 description: Nota de outras atividades.
 *                 example: 6.5
 *     responses:
 *       201:
 *         description: Conceito criado com sucesso.
 *       400:
 *         description: Dados inválidos ou aluno não encontrado.
 *       401:
 *         description: Não autorizado. Token ausente ou inválido.
 */
router.post('/', authMiddleware, createConceito);

/**
 * @swagger
 * /api/conceitos/{id}:
 *   put:
 *     summary: Atualiza um conceito pelo ID.
 *     tags: [Conceitos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do conceito a ser atualizado.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               aluno:
 *                 type: string
 *                 description: Novo ID do aluno.
 *                 example: "64f8e123b8f4f2c9d5e4a789"
 *               disciplina:
 *                 type: string
 *                 description: Novo nome ou ID da disciplina.
 *                 example: "Física"
 *               unidade:
 *                 type: integer
 *                 description: Nova unidade de avaliação.
 *                 example: 2
 *               av1:
 *                 type: number
 *                 format: float
 *                 description: Nova nota da primeira avaliação.
 *                 example: 6.5
 *               av2:
 *                 type: number
 *                 format: float
 *                 description: Nova nota da segunda avaliação.
 *                 example: 7.0
 *               noa:
 *                 type: number
 *                 format: float
 *                 description: Nova nota de outras atividades.
 *                 example: 8.0
 *     responses:
 *       200:
 *         description: Conceito atualizado com sucesso.
 *       404:
 *         description: Conceito não encontrado.
 *       401:
 *         description: Não autorizado. Token ausente ou inválido.
 */
router.put('/:id', authMiddleware, updateConceito);

/**
 * @swagger
 * /api/conceitos/{id}:
 *   delete:
 *     summary: Remove um conceito pelo ID.
 *     tags: [Conceitos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do conceito a ser removido.
 *     responses:
 *       200:
 *         description: Conceito removido com sucesso.
 *       404:
 *         description: Conceito não encontrado.
 *       401:
 *         description: Não autorizado. Token ausente ou inválido.
 */
router.delete('/:id', authMiddleware, deleteConceito);

/**
 * @swagger
 * /api/conceitos/{id}/conceitos:
 *   get:
 *     summary: Retorna todos os conceitos de um aluno específico.
 *     tags: [Conceitos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do aluno.
 *     responses:
 *       200:
 *         description: Lista de conceitos do aluno retornada com sucesso.
 *       404:
 *         description: Aluno ou conceitos não encontrados.
 *       401:
 *         description: Não autorizado. Token ausente ou inválido.
 */
router.get('/:id/conceitos', authMiddleware, getConceitosByAluno);

module.exports = router;