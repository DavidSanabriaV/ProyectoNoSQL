//Crear un modelo de datos, similar a las clases
const mongoose = require('mongoose');

const entrenadoresSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  especialidad: { type: String, required: true },
  experiencia: { type: Number, required: true },
  telefono: { type: String, required: true },
  correo: { type: String, required: true }
}, { collection: "Entrenadores" });

module.exports = mongoose.model('Entrenadores', entrenadoresSchema);
