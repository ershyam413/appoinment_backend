module.exports = (sequelize, DataTypes) => {
  const crousels = sequelize.define("crousels", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subtile: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return crousels;
};
