//Crear un modelo de datos, similar a las clases
const mongoose = require('mongoose');

const pagosSchema = new mongoose.Schema({
  jugador_id: { type: Number, required: true },
  monto: { type: Number, required: true },
  fecha_pago: { type: String, required: true },
  metodo: { type: String, required: true },
  estado: { type: String, required: true }
}, { collection: "Pagos" });

module.exports = mongoose.model('Pagos', pagosSchema);