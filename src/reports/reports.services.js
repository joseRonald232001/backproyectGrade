const reportController = require('../reports/reports.controllers');

const getAllReports = (req, res) => {
    reportController.findAllReports()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
};

module.exports = {
    getAllReports
};
