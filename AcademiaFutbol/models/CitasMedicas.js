const mongoose = require('mongoose');

const citasMedicasSchema = new mongoose.Schema({
  _id: { type: Number },
  jugador_id: { type: Number, required: true },
  fecha: { type: String, required: true },
  motivo: { type: String, required: true },
  doctor: { type: String, required: true },
  resultado: { type: String, required: true }
}, { collection: "CitasMedicas" });

module.exports = mongoose.model('CitasMedicas', citasMedicasSchema);