const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Users = db.define("users",{
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique:true,
    validate: {
      len: [3, 20],
    },
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [3, 255],
    },
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      len: [8, 20],
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    unique:true
  },
  profileImg: {
    type: DataTypes.STRING,
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
