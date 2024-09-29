const express = require('express');
const { getUsuarios, getUsuarioById, updateUsuario, deleteUsuario, getProfessores, getAlunos, getCoordenadores } = require('../controllers/usuarios.controller');
const authMiddleware = require('../middleware/auth.middleware');
const router = express.Router();

//Essas 3 rotas abaixo estão funcionando perfeitamente
router.get('/', authMiddleware, getUsuarios);
router.get('/:id', authMiddleware, getUsuarioById);
router.put('/:id', authMiddleware, updateUsuario);
router.delete('/:id', authMiddleware, deleteUsuario);
// Esses 3 abaixo estão dando um erro desgraçado no postman, provavelmente problema no controller ou na rota, não sei
// o erro é: "error": "Cast to ObjectId failed for value \"aluno\" (type string) at path \"_id\" for model \"Usuarios\""
router.get('/professore', authMiddleware, getProfessores);
router.get('/aluno', authMiddleware, getAlunos);
router.get('/coordenadore', authMiddleware, getCoordenadores);

module.exports = router;
