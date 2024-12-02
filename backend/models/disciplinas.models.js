const mongoose = require('mongoose');

const DisciplinasSchema = new mongoose.Schema({
    nome: { type: String, required: true },
});

module.exports = mongoose.model('Disciplinas', DisciplinasSchema);