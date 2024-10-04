const express = require('express');
const { 
    getConceito,
    getConceitoById,
    createConceito,
    updateConceito,
    deleteConceito
} = require('../controllers/conceitos.controller');
const authMiddleware = require('../middleware/auth.middleware');
const router = express.Router();

router.get('/', authMiddleware, getConceito);
router.get('/:id', authMiddleware, getConceitoById);
router.post('/', authMiddleware, createConceito);
router.put('/:id', authMiddleware, updateConceito);
router.delete('/:id', authMiddleware, deleteConceito);

module.exports = router;
