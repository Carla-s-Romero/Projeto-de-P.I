const mongoose = require('mongoose');

const ConceitosSchema = new mongoose.Schema({
    aluno: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuarios', required: true },
    disciplina: { type: mongoose.Schema.Types.ObjectId, ref: 'Disciplinas', required: true },
    unidade: { type: Number, required: true },
    av1: { type: String, enum:['A', 'PA', 'NA'], required: true },
    av2: { type: String, enum:['A', 'PA', 'NA'], required: true },
    noa: { type: String, enum:['A', 'PA', 'NA'], required: false },
});

module.exports = mongoose.model('Conceitos', ConceitosSchema);