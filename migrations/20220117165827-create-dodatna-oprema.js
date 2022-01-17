'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DodatnaOprema', {
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
      velicina: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: DataTypes.INTEGER,
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
    await queryInterface.dropTable('DodatnaOprema');
  }
};