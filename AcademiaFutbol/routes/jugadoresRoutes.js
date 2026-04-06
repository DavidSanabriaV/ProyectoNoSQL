const express = require("express");
const router = express.Router();
const Jugadores = require('../models/Jugadores');

router.get("/", async (req, res) => {
  res.json(await Jugadores.find());
});

router.get("/:id", async (req, res) => {
  res.json(await Jugadores.findOne({ _id: Number(req.params.id) }));
});

router.post("/", async (req, res) => {
  const count = await Jugadores.countDocuments();
  const nuevo = new Jugadores({ _id: count + 1, ...req.body });
  res.json(await nuevo.save());
});

router.put("/:id", async (req, res) => {
  res.json(await Jugadores.findOneAndUpdate(
    { _id: Number(req.params.id) },
    req.body,
    { new: true }
  ));
});

router.delete("/:id", async (req, res) => {
  res.json(await Jugadores.findOneAndDelete({ _id: Number(req.params.id) }));
});

module.exports = router;