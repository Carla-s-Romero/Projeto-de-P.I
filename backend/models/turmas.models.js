const mongoose = require('mongoose');

const TurmasSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    codigo: { type: String, required: true , unique: true},
    materia: { type: mongoose.Schema.Types.ObjectId, ref: 'Disciplinas', required: true },
    turno: { type: String, enum:['Manhã', 'Tarde'], required: true },
    sala: { type: String, required: true },
    professores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Usuarios'}],
    alunos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Usuarios'}]
});

module.exports = mongoose.model('Turmas', TurmasSchema);