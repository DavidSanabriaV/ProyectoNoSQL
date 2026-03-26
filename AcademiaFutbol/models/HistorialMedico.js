//Crear un modelo de datos, similar a las clases
const mongoose = require('mongoose');

const historialMedicoSchema = new mongoose.Schema({
  jugador_id: { type: Number, required: true },
  tipo_lesion: { type: String, required: true },
  fecha_inicio: { type: String },
  fecha_fin: { type: String },
  tratamiento: { type: String, required: true },
  medico: { type: String, required: true }
}, { collection: "HistorialMedico" });

module.exports = mongoose.model('HistorialMedico', historialMedicoSchema);