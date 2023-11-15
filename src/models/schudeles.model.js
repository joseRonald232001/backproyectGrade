const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Shudele = db.define("schudeles",{
  id: {
    type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique:true,
  },
  startTime: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  endingTime: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dayweek: {
    type: DataTypes.STRING,
    allowNull:false
  },
  status: {
    type: DataTypes.ENUM("active","inactive", "deleted"),
    defaultValue: "active",
  },
});

module.exports = Shudele;
