const Notificacao = require('../models/notificacoes.models');

// @desc    Get all notificacoes
// @route   GET /api/notificacoes
// @access  Public
exports.getNotificacao = async (req, res) => {
  try {
    const notificacao = await Notificacao.find();
    res.json(notificacao);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Get single notificacao
// @route   GET /api/notificacoes/:id
// @access  Public
exports.getNotificacaoById = async (req, res) => {
  try {
    const notificacao = await Notificacao.findById(req.params.id);
    if (!notificacao) {
      return res.status(404).json({ message: 'Notificacão não encontrada' });
    }
    res.json(notificacao);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Create new notificacao
// @route   POST /api/notificacoes
// @access  Public
exports.createNotificacao = async (req, res) => {
  const { mensagem, data, importancia, autor } = req.body;
  try {
    const notificacao = new Notificacao({
        mensagem,
        data,
        importancia,
        autor
    });
    await notificacao.save();
    res.status(201).json(notificacao);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Update notificacao
// @route   PUT /api/notificacoes/:id
// @access  Public
exports.updateNotificacao = async (req, res) => {
  try {
    const notificacao = await Notificacao.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!notificacao) {
      return res.status(404).json({ message: 'Notificacao não encotrada' });
    }
    res.json(notificacao);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Delete notificacao
// @route   DELETE /api/notificacoes/:id
// @access  Public
exports.deleteNotificacao = async (req, res) => {
  try {
    const notificacao = await Notificacao.findByIdAndDelete(req.params.id);
    if (!notificacao) {
      return res.status(404).json({ message: 'Notificacao não encontrada' });
    }
    res.json({ message: 'Notificacao deletada' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
