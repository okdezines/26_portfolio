const express = require("express");
const { Testimonial } = require("../models");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const testimonials = await Testimonial.findAll({ order: [["featured", "DESC"], ["createdAt", "DESC"]] });
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ error: "Unable to load testimonials." });
  }
});

module.exports = router;
