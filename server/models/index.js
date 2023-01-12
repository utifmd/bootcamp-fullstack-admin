'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
const AuthRequest = require("./request/AuthRequest")
const AuthResponse = require("./response/AuthResponse")

const HistoryRequest = require("./request/HistoryRequest")
const StoryRequest = require("./request/StoryRequest")
const UserRequest = require("./request/UserRequest")
const VehicleRequest = require("./request/VehicleRequest")

const HistoryResponse = require("./response/HistoryResponse")
const UserResponse = require("./response/UserResponse")
const VehicleResponse = require("./response/VehicleResponse")
const Message = require("./response/Message")

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.HistoryRequest = HistoryRequest;
db.StoryRequest = StoryRequest;
db.UserRequest = UserRequest;
db.VehicleRequest = VehicleRequest;
db.HistoryResponse = HistoryResponse;
db.UserResponse = UserResponse;
db.VehicleResponse = VehicleResponse;
db.AuthRequest = AuthRequest;
db.AuthResponse = AuthResponse;
db.Message = Message;

module.exports = db;
