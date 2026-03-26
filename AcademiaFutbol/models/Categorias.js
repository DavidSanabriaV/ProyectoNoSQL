//Crear un modelo de datos, similar a las clases
const mongoose = require('mongoose');

const categoriasSchema = new mongoose.Schema({
  nombre_categoria: { type: String, required: true },
  rango_edad: { type: String, required: true },
  anio_competencia: { type: Number, required: true }
}, { collection: "Categorias" });

module.exports = mongoose.model('Categorias', categoriasSchema);
