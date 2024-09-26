const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Aluno = require('../models/Aluno');
const router = express.Router();

// Login
router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const aluno = await Aluno.findOne({ email });
    if (!aluno) return res.status(400).json({ msg: 'Aluno não encontrado' });

    const isMatch = await bcrypt.compare(senha, aluno.senha);
    if (!isMatch) return res.status(400).json({ msg: 'Senha incorreta' });

    const token = jwt.sign({ id: aluno.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ msg: 'Erro no servidor' });
  }
});

module.exports = router;
