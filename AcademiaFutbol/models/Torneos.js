//Crear un modelo de datos, similar a las clases
const mongoose = require('mongoose');

const torneosSchema = new mongoose.Schema({
  nombre_torneo: { type: String, required: true },
  categoria: { type: String, required: true },
  fecha_inicio: { type: String, required: true },
  fecha_fin: { type: String, required: true },
  estado: { type: String, required: true }
}, { collection: "Torneos" });

module.exports = mongoose.model('Torneos', torneosSchema);