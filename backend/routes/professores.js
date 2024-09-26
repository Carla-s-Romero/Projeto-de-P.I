const express = require('express');
const Professor = require('../models/Professor');
const Aluno = require('../models/Aluno');
const Disciplina = require('../models/Disciplina');

const router = express.Router();

// Criar um novo professor
router.post('/', async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const professor = new Professor({ nome, email, senha });
    await professor.save();
    res.status(201).json(professor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Erro ao criar professor' });
  }
});

// Listar todos os professores
router.get('/', async (req, res) => {
  try {
    const professores = await Professor.find();
    res.json(professores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Erro ao listar professores' });
  }
});

// Editar um professor
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, email } = req.body;

  try {
    const professor = await Professor.findByIdAndUpdate(id, { nome, email }, { new: true });
    if (!professor) {
      return res.status(404).json({ msg: 'Professor não encontrado' });
    }
    res.json(professor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Erro ao editar professor' });
  }
});

// Deletar um professor
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const professor = await Professor.findByIdAndDelete(id);
    if (!professor) {
      return res.status(404).json({ msg: 'Professor não encontrado' });
    }
    res.json({ msg: 'Professor deletado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Erro ao deletar professor' });
  }
});

// Atribuir nota/conceito a um aluno em uma disciplina
router.put('/atribuir-conceito/:disciplinaId/:alunoId', async (req, res) => {
  const { disciplinaId, alunoId } = req.params;
  const { conceito } = req.body;

  try {
    const aluno = await Aluno.findById(alunoId);
    const disciplina = await Disciplina.findById(disciplinaId);

    if (!aluno || !disciplina) {
      return res.status(404).json({ msg: 'Aluno ou Disciplina não encontrado' });
    }

    aluno.conceitos.push({ disciplina: disciplinaId, conceito });
    await aluno.save();

    res.json({ msg: 'Conceito atribuído com sucesso ao aluno' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Erro ao atribuir conceito' });
  }
});

module.exports = router;
