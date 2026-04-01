const express = require("express");
const router = express.Router();
const Equipos = require('../models/Equipos');

router.get("/", async (req, res) => {
  res.json(await Equipos.find());
});

router.get("/:id", async (req, res) => {
  res.json(await Equipos.findOne({ _id: Number(req.params.id) }));
});

router.post("/", async (req, res) => {
  const count = await Equipos.countDocuments();
  const nuevo = new Equipos({ _id: count + 1, ...req.body });
  res.json(await nuevo.save());
});

router.put("/:id", async (req, res) => {
  res.json(await Equipos.findOneAndUpdate(
    { _id: Number(req.params.id) },
    req.body,
    { new: true }
  ));
});

router.delete("/:id", async (req, res) => {
  res.json(await Equipos.findOneAndDelete({ _id: Number(req.params.id) }));
});

module.exports = router;