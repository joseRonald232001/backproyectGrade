const express = require('express');
const router = express.Router();
const reportService = require('./reports.services');

router.route('/daily-reports')
    .get(reportService.getAllReports);

module.exports = router;
