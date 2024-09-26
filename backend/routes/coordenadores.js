const express = require('express');
const Coordenador = require('../models/Coordenador');
const Professor = require('../models/Professor');
const Disciplina = require('../models/Disciplina');

const router = express.Router();

// Criar um novo coordenador
router.post('/', async (req, res) => {
  const { nome, email, senha } = req.body;
  
  try {
    const coordenador = new Coordenador({ nome, email, senha });
    await coordenador.save();
    res.status(201).json(coordenador);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Erro ao criar coordenador' });
  }
});

// Listar todos os coordenadores
router.get('/', async (req, res) => {
  try {
    const coordenadores = await Coordenador.find();
    res.json(coordenadores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Erro ao listar coordenadores' });
  }
});

// Editar um coordenador
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, email } = req.body;

  try {
    const coordenador = await Coordenador.findByIdAndUpdate(id, { nome, email }, { new: true });
    if (!coordenador) {
      return res.status(404).json({ msg: 'Coordenador não encontrado' });
    }
    res.json(coordenador);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Erro ao editar coordenador' });
  }
});

// Deletar um coordenador
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const coordenador = await Coordenador.findByIdAndDelete(id);
    if (!coordenador) {
      return res.status(404).json({ msg: 'Coordenador não encontrado' });
    }
    res.json({ msg: 'Coordenador deletado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Erro ao deletar coordenador' });
  }
});

// Associar um professor a uma disciplina
router.put('/associar-professor/:disciplinaId/:professorId', async (req, res) => {
  const { disciplinaId, professorId } = req.params;

  try {
    const disciplina = await Disciplina.findById(disciplinaId);
    const professor = await Professor.findById(professorId);

    if (!disciplina || !professor) {
      return res.status(404).json({ msg: 'Disciplina ou Professor não encontrado' });
    }

    disciplina.professor = professorId;
    await disciplina.save();

    res.json({ msg: 'Professor associado à disciplina com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Erro ao associar professor à disciplina' });
  }
});

module.exports = router;
