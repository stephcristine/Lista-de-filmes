const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'E-mail já está em uso' });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: 'Usuário cadastrado com sucesso', user: newUser });
  } catch (err) {
    console.error('Erro ao cadastrar:', err);
    res.status(500).json({ message: 'Erro interno ao cadastrar' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Usuário não encontrado' });
    }

    if (password != user.password) {
      return res.status(401).json({ message: 'Senha incorreta' });
    }

    res.status(200).json({ message: 'Login bem-sucedido', user: { name: user.name, email: user.email } });
  } catch (err) {
    console.error('Erro no login:', err);
    res.status(500).json({ message: 'Erro interno no login' });
  }
});

module.exports = router;
