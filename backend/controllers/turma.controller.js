const Turma = require('../models/turmas.models');

// @desc    Get all turmas
// @route   GET /api/turmas
// @access  Public
exports.getTurma = async (req, res) => {
  try {
    const turma = await Turma.find();
    res.json(turma);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Get single turma
// @route   GET /api/turmas/:id
// @access  Public
exports.getTurmaById = async (req, res) => {
  try {
    const turma = await Turma.findById(req.params.id);
    if (!turma) {
      return res.status(404).json({ message: 'Turma não encontrada' });
    }
    res.json(turma);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Create new turma
// @route   POST /api/turmas
// @access  Public
exports.createTurma = async (req, res) => {
  const { nome, ano, semestre, alunos, disciplina } = req.body;
  try {
    const turma = new Turma({
      nome,
      ano,
      semestre,
      alunos,
      disciplina
    });
    await turma.save();
    res.status(201).json(turma);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Update turma
// @route   PUT /api/turmas/:id
// @access  Public
exports.updateTurma = async (req, res) => {
  try {
    const turma = await Turma.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!turma) {
      return res.status(404).json({ message: 'Turma não encotrada' });
    }
    res.json(turma);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Delete turma
// @route   DELETE /api/turmas/:id
// @access  Public
exports.deleteTurma = async (req, res) => {
  try {
    const turma = await Turma.findByIdAndDelete(req.params.id);
    if (!turma) {
      return res.status(404).json({ message: 'Turma não encontrada' });
    }
    res.json({ message: 'Turma deletada' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
