const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Users = db.define("users",{
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    unique:true,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    unique:true
  },
  role: {
    type: DataTypes.ENUM("normal", "admin"),
    defaultValue: "normal",
  },
  status: {
    type: DataTypes.ENUM("active", "banned", "inactive", "deleted"),
    defaultValue: "active",
  },
});

module.exports = Users;
