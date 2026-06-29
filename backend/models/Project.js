module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Project",
    {
      title: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.TEXT, allowNull: false },
      tech: { type: DataTypes.STRING, allowNull: false },
      url: { type: DataTypes.STRING, allowNull: true, defaultValue: "" },
      featured: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    },
    { timestamps: true }
  );
};
