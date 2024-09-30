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

// Foi necessario criar uma função para a criação do primeiro admin do sistema. Não dava para usar a função registrar
// porque a função espera receber objetos req e res, que são especificos para requisições HTTP no expresse quando
// a função é chamada no app.js sem o req e res, a função não retorna uma resposta esperada e dá erro retornando um "undefined"
exports.primeiroAdmin = async (dadosAdmin) => {
  try {
    const { nome, email, senha, matricula, tipo } = dadosAdmin;
    const usuario = new Usuario({ nome, email, senha, matricula, tipo });
    await usuario.save();
    return { status: 'success', message: 'Usuário registrado com sucesso' };
  } catch (error) {
    return { status: 'error', message: error.message };
  }
};

exports.login = async (req, res) => {
  try {
    const { nome, senha } = req.body;
    const usuario = await Usuario.findOne({ nome });
    if (!usuario || !(await usuario.compareSenha(senha))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: usuario._id }, config.secret, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
