const Usuario = require('../models/usuarios.models');

exports.getUsuarios = async (req, res) => {
  try {
    const Usuarios = await Usuario.find();
    res.json(Usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUsuarioById = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario not found' });
    }
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario not found' });
    }
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteUsuario = async (req, res) => {
  try {
    await Usuario.findByIdAndDelete(req.params.id);
    res.json({ message: 'Usuario deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//Criar função para retornar Usuários Professores
//Criar função para retornar Usuários Alunos
//Criar função para retornar Usuários Coordenador
//Criar função de Login (Mas acho que a função em auth.controller ja funciona)
//Criar função para retornar Usuarios por Turma
