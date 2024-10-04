const Conceito = require('../models/conceitos.models');

// @desc    Get all conceitos
// @route   GET /api/conceitos
// @access  Public
exports.getConceito = async (res) => {
  try {
    const conceito = await Conceito.find();
    res.json(conceito);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Get single conceito
// @route   GET /api/conceitos/:id
// @access  Public
exports.getConceitoById = async (req, res) => {
  try {
    const conceito = await Conceito.findById(req.params.id);
    if (!conceito) {
      return res.status(404).json({ message: 'Conceito não encontrado' });
    }
    res.json(conceito);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Create new conceito
// @route   POST /api/conceitos
// @access  Public
exports.createConceito = async (req, res) => {
  const { mensagem, data, turma, autor } = req.body;
  try {
    const conceito = new Conceito({
        mensagem,
        data,
        turma,
        autor
    });
    await conceito.save();
    res.status(201).json(conceito);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Update conceito
// @route   PUT /api/conceitos/:id
// @access  Public
exports.updateConceito = async (req, res) => {
  try {
    const conceito = await Conceito.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!conceito) {
      return res.status(404).json({ message: 'Conceito não encotrado' });
    }
    res.json(conceito);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Delete conceito
// @route   DELETE /api/conceitos/:id
// @access  Public
exports.deleteConceito = async (req, res) => {
  try {
    const conceito = await Conceito.findByIdAndDelete(req.params.id);
    if (!conceito) {
      return res.status(404).json({ message: 'Conceito não encontrado' });
    }
    res.json({ message: 'Conceito deletado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};