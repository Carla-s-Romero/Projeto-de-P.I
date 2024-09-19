const Disciplina = require('../models/Disciplina');

// @desc    Get all disciplinas
// @route   GET /api/disciplinas
// @access  Public
exports.getDisciplina = async (req, res) => {
  try {
    const disciplina = await Disciplina.find();
    res.json(disciplina);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Get single disciplina
// @route   GET /api/disciplinas/:id
// @access  Public
exports.getDisciplinaById = async (req, res) => {
  try {
    const disciplina = await Disciplina.findById(req.params.id);
    if (!disciplina) {
      return res.status(404).json({ message: 'Disciplina não encontrada' });
    }
    res.json(disciplina);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Create new disciplina
// @route   POST /api/disciplinas
// @access  Public
exports.createDisciplina = async (req, res) => {
  const { nome, descricao } = req.body;
  try {
    const disciplina = new Disciplina({
      nome,
      descricao
    });
    await disciplina.save();
    res.status(201).json(disciplina);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Update disciplina
// @route   PUT /api/disciplinas/:id
// @access  Public
exports.updateDisciplina = async (req, res) => {
  try {
    const disciplina = await Disciplina.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!disciplina) {
      return res.status(404).json({ message: 'Disciplina não encotrada' });
    }
    res.json(disciplina);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Delete disciplina
// @route   DELETE /api/disciplinas/:id
// @access  Public
exports.deleteDisciplina = async (req, res) => {
  try {
    const disciplina = await Disciplina.findByIdAndDelete(req.params.id);
    if (!disciplina) {
      return res.status(404).json({ message: 'Disciplina não encontrada' });
    }
    res.json({ message: 'Disciplina deletada' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
