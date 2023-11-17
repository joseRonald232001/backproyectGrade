const Sensors = require("../models/sensor.model");
const uuid = require("uuid");

const findSensorById = async (id) => {
    const data = await Sensors.findOne({
      where: { id: id },
    });
    return data;
  };

  const findAllSensors=async()=>{
    const allUsers = Sensors.findAll()
    return allUsers
  }
  
  const createSensor = async (sensorObject) => {
    const newSensor = {
      id: uuid.v4(),
      name:sensorObject.name,
      status:sensorObject.status,
      value:sensorObject.value,
      type:sensorObject.type
    };
    const data = await Sensors.create(newSensor);
    return data;
  };

  const updateSensor=async(id,sensorObj)=>{
    const selectedRing= await Sensors.findOne({
      where:{
        id:id
      }
    });

   if(!selectedRing)return null;
    const modifiedRing =await selectedRing.update(sensorObj);
    return modifiedRing;
  }

  const deleteSensor = async (id) => {
    const sensor = await Sensors.destroy({
      where: {
        id: id,
      },
    });
    return sensor; // 1 || 0
  };
  
module.exports = {
    findSensorById,
    findAllSensors,
    createSensor,
    updateSensor,
    deleteSensor
};
