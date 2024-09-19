const mongoose = require('mongoose');

const UsuariosSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    tipo: { type: String, enum: ['aluno', 'professor', 'coordernador'], required: true},
});

module.exports = mongoose.model('Usuarios', UsuariosSchema);