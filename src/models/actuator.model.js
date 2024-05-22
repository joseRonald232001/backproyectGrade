const { DataTypes } = require("sequelize");
const db = require("../utils/database");
const DailyReport = require("./reports.model");
const User = require("./user.model")

const Actuator = db.define("Actuator", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  type: {
    type: DataTypes.STRING,
  },
  area: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.ENUM("active", "deleted"),
    defaultValue: "active",
  },
  value: {
    type: DataTypes.FLOAT,
  },
  event_type: {
    type: DataTypes.ENUM,
    values: ['ON', 'OFF'],
},
  userId: {
    type: DataTypes.UUID,
    references: {
      model: User,
      key: "id",
    },
  },
  dailyReportId: {
    type: DataTypes.UUID,
    references: {
      model: DailyReport,
      key: "id",
    },
  },
});

module.exports = Actuator;
