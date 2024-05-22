const { DataTypes } = require("sequelize");
const db = require("../utils/database");
const User = require("./user.model");

const DailyReport = db.define("DailyReport", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  // Datos del sensor de temperatura
  maxTemperature: {
    type: DataTypes.FLOAT,
  },
  minTemperature: {
    type: DataTypes.FLOAT,
  },
  temperatureSensorEvents: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  // Datos del sensor de humedad
  maxHumidity: {
    type: DataTypes.FLOAT,
  },
  minHumidity: {
    type: DataTypes.FLOAT,
  },
  humiditySensorEvents: {
    type: DataTypes.JSONB,
    defaultValue: 0
  },
  // Datos del ventilador
  fanOnEvents: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  userId: {
    type: DataTypes.UUID,
  
    references: {
      model: User,
      key: "id"
    }
  }
});

module.exports = DailyReport;
