const mongoose = require('mongoose');

const jugadoresSchema = new mongoose.Schema({
  _id: { type: Number },
  nombre: { type: String, required: true },
  edad: { type: Number, required: true },
  posicion: { type: String, required: true },
  categoria: { type: String, required: true },
  equipo_id: { type: Number, required: true },
  estado_salud: { type: String, required: true }
}, { collection: "Jugadores" });

module.exports = mongoose.model('Jugadores', jugadoresSchema);