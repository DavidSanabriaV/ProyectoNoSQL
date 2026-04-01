const express = require("express");
const router = express.Router();
const Entrenadores = require('../models/Entrenadores');

router.get("/", async (req, res) => {
  res.json(await Entrenadores.find());
});

router.get("/:id", async (req, res) => {
  res.json(await Entrenadores.findOne({ _id: Number(req.params.id) }));
});

router.post("/", async (req, res) => {
  const count = await Entrenadores.countDocuments();
  const nuevo = new Entrenadores({ _id: count + 1, ...req.body });
  res.json(await nuevo.save());
});

router.put("/:id", async (req, res) => {
  res.json(await Entrenadores.findOneAndUpdate(
    { _id: Number(req.params.id) },
    req.body,
    { new: true }
  ));
});

router.delete("/:id", async (req, res) => {
  res.json(await Entrenadores.findOneAndDelete({ _id: Number(req.params.id) }));
});

module.exports = router;