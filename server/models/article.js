'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class article extends Model {
    static associate(models) {
    }
  }
  article.init({
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
    },
    source:{
      type:DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'article',
  });
  return article;
};