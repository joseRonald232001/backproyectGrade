const reports = require("../models/reports.model");
const uuid = require("uuid");

const findAllReports = async () => {

  return await reports.findAll();
};

const createDailyReport = async (reportData) => {

  return await reports.create(reportData);
};

module.exports = {
  findAllReports,
  createDailyReport,
};
