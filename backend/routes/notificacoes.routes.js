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

router.get('/', authMiddleware, getNotificacao);
router.get('/:id', authMiddleware, getNotificacaoById);
router.post('/', authMiddleware, createNotificacao);
router.put('/:id', authMiddleware, updateNotificacao);
router.delete('/:id', authMiddleware, deleteNotificacao);

module.exports = router;
