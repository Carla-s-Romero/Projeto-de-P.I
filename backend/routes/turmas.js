const express = require('express');
const router = express.Router();
const turmasController = require('../controllers/turmaController');

router.get('/', turmasController.getTurma);
router.get('/:id', turmasController.getTurmaById);
router.post('/', turmasController.createTurma);
router.put('/:id', turmasController.updateTurma);
router.delete('/:id', turmasController.deleteTurma);

module.exports = router;
