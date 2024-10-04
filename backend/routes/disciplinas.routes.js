const express = require('express');
const router = express.Router();
const disciplinasController = require('../controllers/disciplinas.controller');

router.get('/', disciplinasController.getDisciplina);
router.get('/:id', disciplinasController.getDisciplinaById);
router.post('/', disciplinasController.createDisciplina);
router.put('/:id', disciplinasController.updateDisciplina);
router.delete('/:id', disciplinasController.deleteDisciplina);

module.exports = router;