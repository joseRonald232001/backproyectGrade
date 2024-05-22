const Users = require("./user.model");
const Actuator = require("./actuator.model");
const DailyReport = require("./reports.model");

const initModels = () => {
  //*a.hasOne(b)
  //*a.hasMany(b)
  //*b.belongsTo(a)
  //*b.belongsToMany(a)

  //?1:M Users - Actuator
  Users.hasMany(Actuator);
  Actuator.belongsTo(Users);

  Actuator.hasOne(DailyReport);
  DailyReport.belongsTo(Actuator);


  Users.hasMany(DailyReport);
  DailyReport.belongsTo(Users);
};

module.exports = initModels;
