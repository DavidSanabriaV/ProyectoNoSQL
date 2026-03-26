const express = require("express");
const router = express.Router();

const Premios = require('../models/Premios');

// GET
router.get("/", async (req, res) => {
  const data = await Premios.find();
  res.json(data);
});

// POST
router.post("/", async (req, res) => {
  const nuevo = new Premios(req.body);
  const guardado = await nuevo.save();
  res.json(guardado);
});

// PUT
router.put("/:id", async (req, res) => {
  const actualizado = await Premios.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(actualizado);
});

// DELETE
router.delete("/:id", async (req, res) => {
  const eliminado = await Premios.findByIdAndDelete(req.params.id);
  res.json(eliminado);
});

module.exports = router;