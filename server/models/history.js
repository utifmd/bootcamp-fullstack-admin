'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      History.belongsTo(models.Vehicle)
      History.belongsTo(models.User)
    }
  }
  History.init({
    fuel: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: {
          msg: "Must be an integer number"
        }
      }
    },
    income: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isNumeric: {
          msg: "Must be an integer number"
        }
      }
    },
    VehicleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          msg: "Must be an integer number"
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          msg: "Must be an integer number"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'History',
  });
  History.addHook('beforeValidate', (history, options) => {
    history.fuel = history.fuel || 300000
  });
  return History;
};