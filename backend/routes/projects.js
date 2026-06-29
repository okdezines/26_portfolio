const express = require("express");
const { Project } = require("../models");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const projects = await Project.findAll({ order: [["featured", "DESC"], ["createdAt", "DESC"]] });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: "Unable to load projects." });
  }
});

module.exports = router;
