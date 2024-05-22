const actuatorController = require("./actuator.controllers");

const findAllActuator = (req, res) => {
  actuatorController
    .findAllActuator()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: `Bad request :`, err });
    });
};

const getMyActuator = (req, res) => {
  const user = req.user.id;
  actuatorController
    .findMyActuator(user)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: `Bad request :`, err });
    });
};

const postNewActuator = (req, res) => {
  const sensorObj = req.body;
  const userId = req.user.id;
  console.log(userId)
  actuatorController
    .createActuator(sensorObj,userId)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((error) => {
      res.status(404).json(error);
    });
};

const patchActuator = (req, res) => {
  const id = req.params.id;
  const sensorObj = req.body;
  actuatorController
    .updateActuator(id, sensorObj)
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

const deleteActuator = (req, res) => {
  const id = req.params.id;
  actuatorController
    .deleteActuator(id)
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
  findAllActuator,
  postNewActuator,
  getMyActuator,
  patchActuator,
  deleteActuator,
};
