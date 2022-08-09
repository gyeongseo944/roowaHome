'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class consult extends Model {
    static associate(models) {
    }
  }
  consult.init({
    company:{
      type:DataTypes.STRING,
      allowNull:false
    },
    name:{
      type:DataTypes.STRING,
      allowNull:false
    },
    number:{
      type:DataTypes.STRING,
      allowNull:false
    },
    email:{
      type:DataTypes.STRING,
      allowNull:false
    },
    contents:{
      type:DataTypes.STRING,
      allowNull:false
    },
    howToKnow:{
      type:DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'consult',
  });
  return consult;
};