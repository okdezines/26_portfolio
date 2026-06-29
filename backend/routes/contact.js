const express = require("express");
const { ContactMessage } = require("../models");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const messages = await ContactMessage.findAll({ order: [["createdAt", "DESC"]] });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Unable to load contact messages." });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }

    const contactMessage = await ContactMessage.create({ name, email, message });

    res.status(201).json(contactMessage);
  } catch (error) {
    res.status(500).json({ error: "Unable to save contact message." });
  }
});

module.exports = router;
