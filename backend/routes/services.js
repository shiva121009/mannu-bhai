// backend/routes/services.js
import express from "express";
import Service from "../models/Service.js";

const router = express.Router();

// GET all services
router.get("/", async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

// GET by category
router.get("/:category", async (req, res) => {
  try {
    const services = await Service.find({ category: req.params.category });
    res.json(services);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

// Add new service
router.post("/", async (req, res) => {
  try {
    const newService = new Service(req.body);
    await newService.save();
    res.json(newService);
  } catch (err) {
    res.status(500).json({ msg: "Error adding service" });
  }
});

export default router;
