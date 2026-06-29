module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "ContactMessage",
    {
      name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
      message: { type: DataTypes.TEXT, allowNull: false },
    },
    { timestamps: true }
  );
};
