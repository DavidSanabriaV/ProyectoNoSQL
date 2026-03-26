//Crear un modelo de datos, similar a las clases
const mongoose = require('mongoose');

const premiosSchema = new mongoose.Schema({
  jugador_id: { type: Number, required: true },
  torneo_id: { type: Number, required: true },
  tipo_premio: { type: String, required: true },
  fecha: { type: String, required: true }
}, { collection: "Premios" });

module.exports = mongoose.model('Premios', premiosSchema);