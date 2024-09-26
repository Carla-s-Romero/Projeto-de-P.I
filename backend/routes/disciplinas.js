const express = require('express');
const Aluno = require('../models/Aluno');
const Disciplina = require('../models/Disciplina');
const router = express.Router();

// Função para calcular o conceito final
function calcularConceitoFinal(conceitos) {
  const combinacoes = {
    'A+A': 'D',
    'A+PA': 'D',
    'PA+PA': 'D',
    'NA+A': 'ND',
    'NA+PA': 'ND',
    'NA+NA': 'ND',
  };

  const key = conceitos.join('+');
  return combinacoes[key] || 'ND';
}

// Atualizar conceito do aluno em uma disciplina
router.put('/conceito/:disciplinaId/:alunoId', async (req, res) => {
  const { disciplinaId, alunoId } = req.params;
  const { conceito } = req.body;

  try {
    const disciplina = await Disciplina.findById(disciplinaId);
    if (!disciplina) {
      return res.status(404).json({ msg: 'Disciplina não encontrada' });
    }

    // Adicionar o conceito ao aluno
    let aluno = await Aluno.findById(alunoId);
    if (!aluno) {
      return res.status(404).json({ msg: 'Aluno não encontrado' });
    }

    // Simular adição de conceitos (ex: dois conceitos diferentes)
    const conceitosAluno = [aluno.conceitoFinal, conceito]; // Exemplo: ['A', 'PA']
    const conceitoFinal = calcularConceitoFinal(conceitosAluno);

    aluno.conceitoFinal = conceitoFinal;
    await aluno.save();

    res.json({ msg: 'Conceito atualizado com sucesso', conceitoFinal });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Erro no servidor' });
  }
});

module.exports = router;
