'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sportovi', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tip: {
        type: Sequelize.STRING
      },
      naziv: {
        type: Sequelize.STRING
      },
      userId: {
        type: DataTypes.INTEGER,
      },
      velicina: {
        type: Sequelize.INTEGER
      },
      cena: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Sportovi');
  }
};