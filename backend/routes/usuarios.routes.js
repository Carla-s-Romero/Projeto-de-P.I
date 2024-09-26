const express = require('express');
const { getUsuarios, getUsuarioById, updateUsuario, deleteUsuario } = require('../controllers/usuarios.controller');
const authMiddleware = require('../middleware/auth.middleware');
const router = express.Router();

router.get('/', authMiddleware, getUsuarios);
router.get('/:id', authMiddleware, getUsuarioById);
router.put('/:id', authMiddleware, updateUsuario);
router.delete('/:id', authMiddleware, deleteUsuario);

module.exports = router;
