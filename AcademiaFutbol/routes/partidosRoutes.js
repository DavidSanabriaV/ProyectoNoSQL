const express = require("express");
const router = express.Router();

const Partidos = require('../models/Partidos');

// GET
router.get("/", async (req, res) => {
  const data = await Partidos.find();
  res.json(data);
});

// POST
router.post("/", async (req, res) => {
  const nuevo = new Partidos(req.body);
  const guardado = await nuevo.save();
  res.json(guardado);
});

// PUT
router.put("/:id", async (req, res) => {
  const actualizado = await Partidos.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(actualizado);
});

// DELETE
router.delete("/:id", async (req, res) => {
  const eliminado = await Partidos.findByIdAndDelete(req.params.id);
  res.json(eliminado);
});

module.exports = router;