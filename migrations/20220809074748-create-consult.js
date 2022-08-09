'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('consults', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      company:{
        type:Sequelize.STRING,
        allowNull:false
      },
      name:{
        type:Sequelize.STRING,
        allowNull:false
      },
      number:{
        type:Sequelize.STRING,
        allowNull:false
      },
      email:{
        type:Sequelize.STRING,
        allowNull:false
      },
      contents:{
        type:Sequelize.STRING,
        allowNull:false
      },
      howToKnow:{
        type:Sequelize.STRING,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('consults');
  }
};