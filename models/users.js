'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    
    static associate({ Obuca }) {
      this.hasMany(Obuca, { foreignKey: 'userId', as: 'obuca', onDelete: 'cascade', hooks: true });
    }
    static associate({ Sportovi }) {
      this.hasMany(Sportovi, { foreignKey: 'userId', as: 'sportovi', onDelete: 'cascade', hooks: true });
    }
    static associate({ Satori }) {
      this.hasMany(Satori, { foreignKey: 'userId', as: 'satori', onDelete: 'cascade', hooks: true });
    }
    static associate({ DodatnaOprema }) {
      this.hasMany(DodatnaOprema, { foreignKey: 'userId', as: 'dodatnaOprema', onDelete: 'cascade', hooks: true });
    }
  };
  Users.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Nije email"
        }
      }
    }
  }, {
    sequelize,
    defaultScope: {
      attributes: { exlude: ['email'] }
    },
    modelName: 'Users',
  });
  return Users;
};