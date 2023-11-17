const sensorController = require("./sensor.controllers");

const findSensorById = (req, res) => {
  const id = req.params.id;
  sensorController
    .findSensorById(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
const getAllSensors = (req, res) => {
sensorController.findAllSensors().then((data) => {
    res.status(200).json(data);
  });
};

const postNewSensor = (req, res) => {
  const sensorObj = req.body;

  sensorController
    .createSensor(sensorObj)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((error) => {
      res.status(404).json(error);
    });
};

const patchSensor = (req, res) => {
  const id = req.params.id;
  const sensorObj = req.body;
  sensorController
    .updateSensor(id, sensorObj)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "invalid id" });
      }
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(400).json({ message: "bad reques", error });
    });
};


const deleteSensors = (req, res) => {
  const id = req.params.id;
  sensorController
    .deleteSensor(id)
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
  findSensorById,
  getAllSensors,
  postNewSensor,
  patchSensor,
  deleteSensors
};
