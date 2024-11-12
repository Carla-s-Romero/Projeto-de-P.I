const mongoose = require('mongoose');

const FaltasSchema = new mongoose.Schema({
    data: { type: Date, default: Date.now(), required: true },
    disciplina: { type: mongoose.Schema.Types.ObjectId, ref: 'Disciplinas', required: true },
    aluno: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuarios', required: true }
});

module.exports = mongoose.model('Faltas', FaltasSchema);