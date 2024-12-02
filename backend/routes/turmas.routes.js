const express = require('express');
const turmasController = require('../controllers/turma.controller');
const authMiddleware = require('../middleware/auth.middleware');

const router = express.Router();

router.get('/', authMiddleware, turmasController.getTurma);
router.get('/:id', authMiddleware, turmasController.getTurmaById);
router.post('/', authMiddleware, turmasController.createTurma);
router.put('/:id', authMiddleware, turmasController.updateTurma);
router.delete('/:id', authMiddleware, turmasController.deleteTurma);
router.get('/:id/alunos', authMiddleware, turmasController.getAlunosByTurmaId);

//novas rotas
router.post('/:id/add-aluno', turmasController.addAlunotoTurma);
router.delete('/:id/remove-aluno/:alunoId', turmasController.removeAlunofromTurma);
router.get('/user/:userId', authMiddleware, turmasController.getTurmasByUserId);

module.exports = router;
