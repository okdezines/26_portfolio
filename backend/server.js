const express = require("express");
const { Sequelize } = require("sequelize");
const cors = require("cors");
const dotenv = require("dotenv");

const projectsRouter = require("./routes/projects");
const blogRouter = require("./routes/blog");
const testimonialsRouter = require("./routes/testimonials");
const contactRouter = require("./routes/contact");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "Portfolio backend running with PostgreSQL" });
});

app.use("/api/projects", projectsRouter);
app.use("/api/blog-posts", blogRouter);
app.use("/api/testimonials", testimonialsRouter);
app.use("/api/contact-messages", contactRouter);

const port = process.env.PORT || 8000;

// Initialize models (models/index will create and export `sequelize`)
const { sequelize } = require("./models");

async function start() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Connected to PostgreSQL");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Postgres connection error:", error);
    process.exit(1);
  }
}

start();
