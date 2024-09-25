const mongoose = require('mongoose');

const TurmasSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    ano: { type: String, required: true },
    semestre: { type: String, required: true },
    alunos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Usuarios' }],
    disciplina: { type: mongoose.Schema.Types.ObjectId, ref: 'Disciplinas', required: true },
});

module.exports = mongoose.model('Turmas', TurmasSchema);