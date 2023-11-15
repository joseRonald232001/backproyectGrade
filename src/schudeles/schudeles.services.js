const scheduleController = require("./schudeles.controllers");

const getAllSchedules = (req, res) => {
  scheduleController
    .findAllSchedules()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((error) => {
      res.status(404).json(error);
    });
};

const postNewSchedule = (req, res) => {
  const scheduleObject = req.body;
  console.log(scheduleObject)
  scheduleController
    .createSchedule(scheduleObject)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((error) => {
      res.status(404).json(error.message);
    });
};

const updateScheduleTimes = (req, res) => {
  const id = req.params.id;
  const scheduleObj = req.body;
  scheduleController
    .updateSchedule(id, scheduleObj)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "Invalid ID" });
      }
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: "Bad request", err });
    });
};

const deleteScheduleTimes = (req, res) => {
  const id = req.params.id;
  scheduleController
    .deleteSchedule(id)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "Invalid ID" });
      }
      res.status(204).json();
    })

    .catch((err) => {
      res.status(400).json({ message: "Bad request", err });
    });
};

module.exports = {
  getAllSchedules,
  postNewSchedule,
  updateScheduleTimes,
  deleteScheduleTimes,
};
