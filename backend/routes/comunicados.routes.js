const express = require('express');
const { 
    getComunicado,
    getComunicadoById,
    createComunicado,
    updateComunicado,
    deleteComunicado
} = require('../controllers/comunicados.controller');
const authMiddleware = require('../middleware/auth.middleware');
const router = express.Router();

//Add swagger - Testar
/**
 * @swagger
 * tags:
 *   name: Comunicados
 *   description: Gerenciamento de comunicados no sistema escolar
 */

/**
 * @swagger
 * /api/comunicados:
 *   get:
 *     summary: Retorna todos os comunicados
 *     tags: [Comunicados]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de todos os comunicados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Comunicado'
 */
router.get('/', authMiddleware, getComunicado);

/**
 * @swagger
 * /api/comunicados/{id}:
 *   get:
 *     summary: Retorna um comunicado pelo ID
 *     tags: [Comunicados]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Comunicado encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comunicado'
 *       404:
 *         description: Comunicado não encontrado
 */
router.get('/:id', authMiddleware, getComunicadoById);

/**
 * @swagger
 * /api/comunicados:
 *   post:
 *     summary: Cria um novo comunicado
 *     tags: [Comunicados]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comunicado'
 *     responses:
 *       201:
 *         description: Comunicado criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comunicado'
 *       400:
 *         description: Dados inválidos
 */
router.post('/', authMiddleware, createComunicado);

/**
 * @swagger
 * /api/comunicados/{id}:
 *   put:
 *     summary: Atualiza um comunicado pelo ID
 *     tags: [Comunicados]
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
 *             $ref: '#/components/schemas/Comunicado'
 *     responses:
 *       200:
 *         description: Comunicado atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comunicado'
 *       404:
 *         description: Comunicado não encontrado
 */
router.put('/:id', authMiddleware, updateComunicado);

/**
 * @swagger
 * /api/comunicados/{id}:
 *   delete:
 *     summary: Exclui um comunicado pelo ID
 *     tags: [Comunicados]
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
 *         description: Comunicado excluído com sucesso
 *       404:
 *         description: Comunicado não encontrado
 */
router.delete('/:id', authMiddleware, deleteComunicado);

module.exports = router;

