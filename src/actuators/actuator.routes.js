const router = require("express").Router();
const actuatorServies = require("./actuator.services");
const passportJwt = require('../middlewares/passport.middleware')

router.route('/actuators')
.get(actuatorServies.findAllActuator)
.post(passportJwt.authenticate('jwt',{session:false}),actuatorServies.postNewActuator);

router.route("/myactuators")
.get(passportJwt.authenticate('jwt',{session:false}),actuatorServies.getMyActuator)


router.route("/actuator/:id")
.delete(actuatorServies.deleteActuator)
.put(actuatorServies.patchActuator);

module.exports = router;
