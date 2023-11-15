const router = require('express').Router();
const schedulesServies =require('./schudeles.services');


router.route("/allschedules")
.get(schedulesServies.getAllSchedules)

router.route('/newschedule')
.post(schedulesServies.postNewSchedule);

router.route('/schedule/:id')
.put(schedulesServies.updateScheduleTimes)
.delete(schedulesServies.deleteScheduleTimes)


  module.exports =router;

