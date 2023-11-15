const Schedules = require("../models/schudeles.model");

const findAllSchedules = async () => {
  const schedeles = await Schedules.findAll();
  return schedeles;
};

const createSchedule = async (scheduleObject) => {
  const newSchedule = {
    name: scheduleObject.name,
    startTime: scheduleObject.startTime,
    endingTime: scheduleObject.endingTime,
    dayweek: scheduleObject.dayweek,
  };
  const data = await Schedules.create(newSchedule);
  return data;
};

const updateSchedule = async (id, scheduleObj) => {
  const selectedSchedule = await Schedules.findOne({
    where: {
      id: id,
    },
  });

  if (!selectedSchedule) return null;

  const modifiedUser = await selectedSchedule.update(scheduleObj);
  return modifiedUser;
};

const deleteSchedule = async (id) => {
  const schedule = await Schedules.destroy({
    where: {
      id: id,
    },
  });
  return schedule; // 1 || 0
};

module.exports = {
  findAllSchedules,
  createSchedule,
  updateSchedule,
  deleteSchedule,
};
