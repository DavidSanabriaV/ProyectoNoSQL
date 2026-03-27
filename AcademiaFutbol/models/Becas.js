//Crear un modelo de datos, similar a las clases
const mongoose = require('mongoose');

const becasSchema = new mongoose.Schema({
  _id: { type: Number},
  jugador_id: { type: Number, required: true },
  tipo_beca: { type: String, required: true },
  porcentaje: { type: Number, required: true },
  fecha_inicio: { type: String, required: true },
  fecha_fin: { type: String, required: true }
}, { collection: "Becas" });

module.exports = mongoose.model('Becas', becasSchema);
