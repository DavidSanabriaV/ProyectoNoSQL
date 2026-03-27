const express = require("express");
const router = express.Router();
const Categoria = require('../models/Categorias');

router.get("/", async (req, res) => {
  const data = await Categoria.find();
  res.json(data);
});

router.get("/:id", async (req, res) => {
  const dato = await Categoria.findOne({ _id: Number(req.params.id) });
  res.json(dato);
});

router.post("/", async (req, res) => {
  const count = await Categoria.countDocuments();
  const nuevo = new Categoria({ _id: count + 1, ...req.body });
  const guardado = await nuevo.save();
  res.json(guardado);
});

router.put("/:id", async (req, res) => {
  const actualizado = await Categoria.findOneAndUpdate(
    { _id: Number(req.params.id) },
    req.body,
    { new: true }
  );
  res.json(actualizado);
});

router.delete("/:id", async (req, res) => {
  const eliminado = await Categoria.findOneAndDelete({ _id: Number(req.params.id) });
  res.json(eliminado);
});

module.exports = router;