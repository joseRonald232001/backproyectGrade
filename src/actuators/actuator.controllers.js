const Actuator = require("../models/actuator.model");
const uuid = require("uuid");

const findAllActuator = async () => {
  const actuator = await Actuator.findAll();
  return actuator;
};

const findMyActuator = async (userId) => {
  const actuator = await Actuator.findAll({
    where: {
      userId: userId,
    },
  });
  return actuator;
};

const createActuator = async (actuatorObject,userId) => {
  const newActuator = {
    id: uuid.v4(),
    type: actuatorObject.type,
    area:actuatorObject.area,
    status: actuatorObject.status,
    value: actuatorObject.value,
    userId:userId,
    eventType:actuatorObject.eventType,
  };
  const data = await Actuator.create(newActuator);
  return data;
};

const updateActuator = async (id, ActuatorObj) => {
  const selectedActuator = await Actuator.findOne({
    where: {
      id: id,
    },
  });

  if (!selectedActuator) return null;
  const modifiedActuator = await selectedActuator.update(ActuatorObj);
  return modifiedActuator;
};

const deleteActuator = async (id) => {
  const actuator = await Actuator.destroy({
    where: {
      id: id,
    },
  });
  return actuator; // 1 || 0
};

module.exports = {
  findAllActuator,
  createActuator,
  findMyActuator,
  updateActuator,
  deleteActuator,
};
