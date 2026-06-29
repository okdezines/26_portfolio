const path = require("path");
const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const databaseUrl = process.env.DATABASE_URL;
const storage = process.env.DATABASE_STORAGE || "database.sqlite";

const sequelize = databaseUrl
  ? new Sequelize(databaseUrl, {
      dialect: "postgres",
      logging: false,
    })
  : new Sequelize({
      dialect: "sqlite",
      storage: path.join(__dirname, "..", storage),
      logging: false,
    });

// Import model definitions
const defineProject = require("./Project");
const defineBlogPost = require("./BlogPost");
const defineTestimonial = require("./Testimonial");
const defineContactMessage = require("./ContactMessage");

const Project = defineProject(sequelize, DataTypes);
const BlogPost = defineBlogPost(sequelize, DataTypes);
const Testimonial = defineTestimonial(sequelize, DataTypes);
const ContactMessage = defineContactMessage(sequelize, DataTypes);

module.exports = {
  sequelize,
  Project,
  BlogPost,
  Testimonial,
  ContactMessage,
};
