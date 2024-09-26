const mongoose = require('mongoose');

const AlunoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  disciplinas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Disciplina' }],
  conceitoFinal: { type: String, enum: ['A', 'PA', 'NA', 'D', 'ND'] }
});

module.exports = mongoose.model('Aluno', AlunoSchema);
