const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  status: { type: String, enum: ['Pendente', 'Assistido'], default: 'Pendente' }
});

module.exports = mongoose.model('Movie', MovieSchema);
