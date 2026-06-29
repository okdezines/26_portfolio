const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL || "postgres://postgres:password@127.0.0.1:5432/portfolio";

const sequelize = new Sequelize(databaseUrl, {
  dialect: "postgres",
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
