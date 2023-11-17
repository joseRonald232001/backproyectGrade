const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Sensors = db.define("sensor",{
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type:{
    type: DataTypes.STRING,
    allowNull: false
  },
  value:{
    type:DataTypes.FLOAT,
    allowNull:false
  },
  status: {
    type: DataTypes.STRING
  }
});

module.exports = Sensors;
