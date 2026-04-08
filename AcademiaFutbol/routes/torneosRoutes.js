const express = require("express");
const router = express.Router();

const Torneos = require('../models/Torneos');

// GET
router.get("/", async (req, res) => {
  const data = await Torneos.find();
  res.json(data);
});

// GET por ID
router.get("/:id", async (req, res) => {
  const dato = await Torneos.findOne({ _id: Number(req.params.id) });
  res.json(dato);
});

// POST
router.post("/", async (req, res) => {
  const count = await Torneos.countDocuments();
  const nuevo = new Torneos({ _id: count + 1, ...req.body });
  const guardado = await nuevo.save();
  res.json(guardado);
});

// PUT
router.put("/:id", async (req, res) => {
  const actualizado = await Torneos.findOneAndUpdate(
    { _id: Number(req.params.id) },
    req.body,
    { new: true }
  );
  res.json(actualizado);
});

// DELETE
router.delete("/:id", async (req, res) => {
  const eliminado = await Torneos.findOneAndDelete({ _id: Number(req.params.id) });
  res.json(eliminado);
});

module.exports = router;