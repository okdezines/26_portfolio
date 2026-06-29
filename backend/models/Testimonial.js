module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Testimonial",
    {
      author: { type: DataTypes.STRING, allowNull: false },
      role: { type: DataTypes.STRING, allowNull: true, defaultValue: "" },
      company: { type: DataTypes.STRING, allowNull: true, defaultValue: "" },
      quote: { type: DataTypes.TEXT, allowNull: false },
      featured: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    },
    { timestamps: true }
  );
};
