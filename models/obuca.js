'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Obuca extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({ Users }) {
      // define association here
      this.belongsTo(Users, {foreignKey: 'userId', as: 'user'});
    }
  }
  Obuca.init({
    tip: DataTypes.STRING,
    naziv: DataTypes.STRING,
    velicina: DataTypes.INTEGER,
    cena: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Obuca',
  });
  return Obuca;
};