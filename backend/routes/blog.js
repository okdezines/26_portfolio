const express = require("express");
const { BlogPost } = require("../models");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const posts = await BlogPost.findAll({ order: [["featured", "DESC"], ["published_at", "DESC"]] });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Unable to load blog posts." });
  }
});

module.exports = router;
