module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "BlogPost",
    {
      title: { type: DataTypes.STRING, allowNull: false },
      slug: { type: DataTypes.STRING, allowNull: false, unique: true },
      excerpt: { type: DataTypes.TEXT, allowNull: false },
      content: { type: DataTypes.TEXT, allowNull: false },
      published_at: { type: DataTypes.DATE, allowNull: false },
      featured: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    },
    { timestamps: true }
  );
};
