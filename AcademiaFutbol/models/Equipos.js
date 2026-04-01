const mongoose = require('mongoose');

const equiposSchema = new mongoose.Schema({
  _id: { type: Number },
  nombre_equipo: { type: String, required: true },
  categoria: { type: String, required: true },
  entrenador_id: { type: Number, required: true },
  lista_jugadores: { type: [Number], required: true },
  puntos: { type: Number, required: true }
}, { collection: "Equipos" });

module.exports = mongoose.model('Equipos', equiposSchema);