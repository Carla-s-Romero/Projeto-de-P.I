const mongoose = require('mongoose');

const UsuariosSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true }
});

module.exports = mongoose.model('Usuarios', UsuariosSchema);