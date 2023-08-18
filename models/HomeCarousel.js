module.exports = (sequelize, DataTypes) => {
  const HomeCarousel = sequelize.define("HomeCarousel", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subtitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    carouselImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return HomeCarousel;
};
