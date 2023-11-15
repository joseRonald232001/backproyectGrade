const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const emer = db.define("emer",{
  id: {
    type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.INTEGER
  }
});

module.exports = emer;
