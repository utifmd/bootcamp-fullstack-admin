'use strict';
const {
  Model
} = require('sequelize');
const { encrypt, isMatch } = require("../helper")
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.History)
      User.hasOne(models.Story)
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [5, 35]
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [["driver", "admin", "guest"]],
          msg: "Must be driver or driver"
        }
      }
    },
    identityNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: {
          msg: "Must be an integer number"
        }
      }
    },
    telp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: {
          msg: "Must be an integer number"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: "Email must not be empty."
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: "Password must not be empty."
      }
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
      // validate: {
      //   isUrl: true
      // }
    } //, HistoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User'
  });
  User.addHook('beforeValidate', (user, options) => {
    if (user.password) user.password = encrypt(user.password)
    user.role = user.role || "guest"
    user.imageUrl = user.imageUrl || "https://via.placeholder.com/150" 
  });
  return User;
};