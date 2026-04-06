const express = require("express");
const router = express.Router();
const Pagos = require('../models/Pagos');

router.get("/", async (req, res) => {
  res.json(await Pagos.find());
});

router.get("/:id", async (req, res) => {
  res.json(await Pagos.findOne({ _id: Number(req.params.id) }));
});

router.post("/", async (req, res) => {
  const count = await Pagos.countDocuments();
  const nuevo = new Pagos({ _id: count + 1, ...req.body });
  res.json(await nuevo.save());
});

router.put("/:id", async (req, res) => {
  res.json(await Pagos.findOneAndUpdate(
    { _id: Number(req.params.id) },
    req.body,
    { new: true }
  ));
});

router.delete("/:id", async (req, res) => {
  res.json(await Pagos.findOneAndDelete({ _id: Number(req.params.id) }));
});

module.exports = router;