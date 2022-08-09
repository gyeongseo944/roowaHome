'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class notice extends Model {
    static associate(models) {
    }
  }
  notice.init({
    title:{
      type:DataTypes.STRING,
      allowNull:false
    },
    contents:{
      type:DataTypes.STRING,
      allowNull:false
    },
    image:{
      type:DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'notice',
  });
  return notice;
};