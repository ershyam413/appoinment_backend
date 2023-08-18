module.exports = (sequelize, DataTypes) => {
  const ContactusFeedback = sequelize.define("ContactusFeedback", {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    City: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    State: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Zip: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyWebsite: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    helpCat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    helpDesc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return ContactusFeedback;
};
