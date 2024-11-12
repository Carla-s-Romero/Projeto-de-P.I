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

router.get('/', authMiddleware, getFalta);
router.get('/:id', authMiddleware, getFaltaById);
router.get('/aluno/:id/', authMiddleware, getFaltaByAluno);
router.post('/', authMiddleware, createFalta);
router.put('/:id', authMiddleware, updateFalta);
router.delete('/:id', authMiddleware, deleteFalta);

module.exports = router;