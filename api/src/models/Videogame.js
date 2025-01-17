const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    released:{
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,
    },
    rating:{
      type: DataTypes.FLOAT,
      defaultValue: 0.0,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: "",
      isUrl: true
    },
    platforms:{
      type: DataTypes.JSON,
      allowNull: false
    },
    createdByUser: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },
  {timestamps: false});
};
