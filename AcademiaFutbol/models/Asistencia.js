const mongoose = require('mongoose');

const asistenciaSchema = new mongoose.Schema({
  _id: { type: Number},
  jugador_id: { type: Number, required: true },
  fecha: { type: String, required: true },
  estado: { type: String, required: true },
  observaciones: { type: String, required: false }
}, { collection: "Asistencias" });

module.exports = mongoose.model('Asistencia', asistenciaSchema);