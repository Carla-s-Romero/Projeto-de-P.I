const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuarios.models');
const config = require('../config/jwt');

exports.registrar = async (req, res) => {
  try {
    const { nome, email, senha, matricula, tipo } = req.body;
    const usuario = new Usuario({ nome, email, senha, matricula, tipo });
    await usuario.save();
    res.status(201).json({ message: 'Usuario registered successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { nome, senha } = req.body;
    const usuario = await Usuario.findOne({ nome });
    if (!usuario || !(await usuario.comparePassword(senha))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: usuario._id }, config.secret, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
