const express = require("express");
const router = express.Router();
const Beca = require('../models/Becas');

router.get("/", async (req, res) => {
  const data = await Beca.find();
  res.json(data);
});

router.get("/:id", async (req, res) => {
  const dato = await Beca.findOne({ _id: Number(req.params.id) });
  res.json(dato);
});

router.post("/", async (req, res) => {
  const count = await Beca.countDocuments();
  const nuevo = new Beca({ _id: count + 1, ...req.body });
  const guardado = await nuevo.save();
  res.json(guardado);
});

router.put("/:id", async (req, res) => {
  const actualizado = await Beca.findOneAndUpdate(
    { _id: Number(req.params.id) },
    req.body,
    { new: true }
  );
  res.json(actualizado);
});

router.delete("/:id", async (req, res) => {
  const eliminado = await Beca.findOneAndDelete({ _id: Number(req.params.id) });
  res.json(eliminado);
});

module.exports = router;