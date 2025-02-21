const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Resource = sequelize.define("Resource", {
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
  type: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Resource;
