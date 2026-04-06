const express = require("express");
const router = express.Router();
const HistorialMedico = require('../models/HistorialMedico');

router.get("/", async (req, res) => {
  res.json(await HistorialMedico.find());
});

router.get("/:id", async (req, res) => {
  res.json(await HistorialMedico.findOne({ _id: Number(req.params.id) }));
});

router.post("/", async (req, res) => {
  const count = await HistorialMedico.countDocuments();
  const nuevo = new HistorialMedico({ _id: count + 1, ...req.body });
  res.json(await nuevo.save());
});

router.put("/:id", async (req, res) => {
  res.json(await HistorialMedico.findOneAndUpdate(
    { _id: Number(req.params.id) },
    req.body,
    { new: true }
  ));
});

router.delete("/:id", async (req, res) => {
  res.json(await HistorialMedico.findOneAndDelete({ _id: Number(req.params.id) }));
});

module.exports = router;