const express = require("express");
const router = express.Router();
const CitasMedicas = require('../models/CitasMedicas');

router.get("/", async (req, res) => {
  res.json(await CitasMedicas.find());
});

router.get("/:id", async (req, res) => {
  res.json(await CitasMedicas.findOne({ _id: Number(req.params.id) }));
});

router.post("/", async (req, res) => {
  const count = await CitasMedicas.countDocuments();
  const nuevo = new CitasMedicas({ _id: count + 1, ...req.body });
  res.json(await nuevo.save());
});

router.put("/:id", async (req, res) => {
  res.json(await CitasMedicas.findOneAndUpdate(
    { _id: Number(req.params.id) },
    req.body,
    { new: true }
  ));
});

router.delete("/:id", async (req, res) => {
  res.json(await CitasMedicas.findOneAndDelete({ _id: Number(req.params.id) }));
});

module.exports = router;