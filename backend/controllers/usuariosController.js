const Usuario = require('../models/Usuarios');

// @desc    Get all usuarios
// @route   GET /api/usuarios
// @access  Public
exports.getUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.find();
    res.json(usuario);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Get single usuario
// @route   GET /api/usuarios/:id
// @access  Public
exports.getUsuarioById = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario não encontrada' });
    }
    res.json(usuario);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Create new usuario
// @route   POST /api/usuarios
// @access  Public
exports.createUsuario = async (req, res) => {
  const { nome, email, senha, tipo } = req.body;
  try {
    const usuario = new Usuario({
      nome,
      email,
      senha,
      tipo
    });
    await usuario.save();
    res.status(201).json(usuario);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Update usuario
// @route   PUT /api/usuarios/:id
// @access  Public
exports.updateUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario não encotrada' });
    }
    res.json(usuario);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Delete usuario
// @route   DELETE /api/usuarios/:id
// @access  Public
exports.deleteUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndDelete(req.params.id);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario não encontrada' });
    }
    res.json({ message: 'Usuario deletada' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
