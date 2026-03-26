//Crear un modelo de datos, similar a las clases
const mongoose = require('mongoose');

const partidosSchema = new mongoose.Schema({
  equipo_local: { type: Number, required: true },
  equipo_visitante: { type: Number, required: true },
  fecha: { type: String, required: true },
  marcador: { type: String, required: true },
  estadio: { type: String, required: true }
}, { collection: "Partidos" });

module.exports = mongoose.model('Partidos', partidosSchema);