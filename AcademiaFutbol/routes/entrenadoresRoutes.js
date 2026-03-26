const express = require("express");
const router = express.Router();

const Entrenador = require('../models/Entrenadores');

// GET
router.get("/", async (req, res) => {
  const data = await Entrenador.find();
  res.json(data);
});

// POST
router.post("/", async (req, res) => {
  const nuevo = new Entrenador(req.body);
  const guardado = await nuevo.save();
  res.json(guardado);
});

// PUT
router.put("/:id", async (req, res) => {
  const actualizado = await Entrenador.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(actualizado);
});

// DELETE
router.delete("/:id", async (req, res) => {
  const eliminado = await Entrenador.findByIdAndDelete(req.params.id);
  res.json(eliminado);
});

module.exports = router;