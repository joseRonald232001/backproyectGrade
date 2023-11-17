const router = require("express").Router();
const sensorServies = require("./sensor.services");

router.route('/sensors')
.get(sensorServies.getAllSensors);

router.route("/sensor/:id")
.get(sensorServies.findSensorById)
.delete(sensorServies.deleteSensors)
.put(sensorServies.patchSensor);

router.route("/newsensor").post(sensorServies.postNewSensor);

module.exports = router;
