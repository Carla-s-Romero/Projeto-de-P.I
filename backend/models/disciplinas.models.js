const mongoose = require('mongoose');

const DisciplinasSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    professores: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuarios' },
    turma: { type: mongoose.Schema.Types.ObjectId, ref: 'Turma', required: true },
});

module.exports = mongoose.model('Disciplinas', DisciplinasSchema);