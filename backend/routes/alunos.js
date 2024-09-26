const express = require('express');
const bcrypt = require('bcryptjs');
const Aluno = require('../models/Aluno');
const router = express.Router();

// Cadastro de Aluno
router.post('/register', async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const alunoExiste = await Aluno.findOne({ email });
    if (alunoExiste) return res.status(400).json({ msg: 'Aluno já cadastrado' });

    const salt = await bcrypt.genSalt(10);
    const senhaHash = await bcrypt.hash(senha, salt);

    const aluno = new Aluno({
      nome,
      email,
      senha: senhaHash
    });

    await aluno.save();
    res.status(201).json({ msg: 'Aluno registrado com sucesso' });
  } catch (err) {
    res.status(500).json({ msg: 'Erro no servidor' });
  }
});

// Listar Alunos
router.get('/', async (req, res) => {
  try {
    const alunos = await Aluno.find().populate('disciplinas');
    res.json(alunos);
  } catch (err) {
    res.status(500).json({ msg: 'Erro no servidor' });
  }
});

module.exports = router;
