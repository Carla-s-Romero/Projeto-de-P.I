const mongoose = require('mongoose');

const DisciplinaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  professor: { type: mongoose.Schema.Types.ObjectId, ref: 'Professor' },
  alunos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Aluno' }],
  conceito: { type: String, enum: ['A', 'PA', 'NA'] },
});

module.exports = mongoose.model('Disciplina', DisciplinaSchema);
