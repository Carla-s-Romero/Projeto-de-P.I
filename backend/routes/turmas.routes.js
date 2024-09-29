const express = require('express');
const router = express.Router();
const turmasController = require('../controllers/turma.controller');

router.get('/', turmasController.getTurma);
router.get('/:id', turmasController.getTurmaById);
router.post('/', turmasController.createTurma);
router.put('/:id', turmasController.updateTurma);
router.delete('/:id', turmasController.deleteTurma);
router.get('/:id/alunos', turmasController.getAlunosByTurmaId);

module.exports = router;
