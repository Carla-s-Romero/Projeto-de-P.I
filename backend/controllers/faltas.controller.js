const Faltas = require('../models/faltas.models')
const Usuario = require('../models/usuarios.models');

// @desc    Get all faltas
// @route   GET /api/faltas
// @access  Private
exports.getFalta = async (req, res) => {
    try {
      const faltas = await Faltas.find();
      res.json(faltas);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  // @desc    Get single faltas
  // @route   GET /api/faltas/:id
  // @access  Private
  exports.getFaltaById = async (req, res) => {
    try {
      const faltas = await Faltas.findById(req.params.id);
      if (!faltas) {
        return res.status(404).json({ message: 'Faltas não encontrado' });
      }
      res.json(faltas);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
// @desc    Get all faltas of a specific aluno
// @route   GET /api/faltas/:id/
// @access  Private
exports.getFaltaByAluno = async (req, res) => {
    try {
      const alunoId = req.params.id;
      const usuario = await Usuario.findById(alunoId);
      if (!usuario || usuario.tipo !== 'aluno') {
        return res.status(400).json({ message: 'Usuário não é um aluno' });
      }
      const faltas = await Faltas.find({ aluno: alunoId })
        .populate('disciplina')
        .populate('aluno');
      if (!faltas.length) {
        return res.status(404).json({ message: 'Faltas não encontrados' });
      }
      res.json(faltas);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  // @desc    Create new faltas
  // @route   POST /api/faltas
  // @access  Private
  // Agora tá Funcionando
  exports.createFalta = async (req, res) => {
    const { data, disciplina, aluno } = req.body;
    try {
      const usuario = await Usuario.findById(aluno);
      if (!usuario || usuario.tipo !== 'aluno') {
        return res.status(400).json({ message: 'Usuário não encontrado ou não é um aluno' });
      }
      const faltas = new Faltas({
          data,
          disciplina,
          aluno
      });
      await faltas.save();
      res.status(201).json(faltas);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  
  // @desc    Update faltas
  // @route   PUT /api/faltas/:id
  // @access  Private
  exports.updateFalta = async (req, res) => {
    try {
      const faltas = await Faltas.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!faltas) {
        return res.status(404).json({ message: 'Falta não encotrada' });
      }
      res.json(faltas);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  
  // @desc    Delete faltas
  // @route   DELETE /api/faltas/:id
  // @access  Private
  exports.deleteFalta = async (req, res) => {
    try {
      const faltas = await Faltas.findByIdAndDelete(req.params.id);
      if (!faltas) {
        return res.status(404).json({ message: 'Falta não encontrada' });
      }
      res.json({ message: 'Falta deletada' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };