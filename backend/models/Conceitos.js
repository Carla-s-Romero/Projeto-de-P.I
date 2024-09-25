const mongoose = require('mongoose');

const ConceitosSchema = new mongoose.Schema({
    aluno: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuarios', required: true },
    disciplina: { type: mongoose.Schema.Types.ObjectId, ref: 'Disciplinas', required: true },
    unidade: { type: Number, required: true },
    av1: { enum:['A', 'PA', 'NA'], required: true },
    av2: { enum:['A', 'PA', 'NA'], required: true },
});
// Esquema acima ainda tem que ser analisado

module.exports = mongoose.model('Conceitos', ConceitosSchema);