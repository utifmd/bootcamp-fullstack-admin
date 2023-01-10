'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vehicle.hasMany(models.History)
    }
  }
  Vehicle.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 35]
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isIn: {
          args: [['onboarding', 'standby']],
          msg: "Must be onboarding or standby"
        }
      }
    },
    route: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    passengerCapacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          msg: "Must be an integer number"
        }
      }
    },
    policeNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vendor: DataTypes.STRING,
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true
      }
    } //, HistoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Vehicle',
  });
  return Vehicle;
};