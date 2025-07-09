const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const movieRoutes = require('./routes/movies');
const userRoutes = require('./routes/users');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/filmes', movieRoutes);
app.use('/api/usuarios', userRoutes);


mongoose.connect('mongodb://localhost:27017/filmes');
app.listen(8000, () => console.log('Servidor rodando na porta 8000'));
