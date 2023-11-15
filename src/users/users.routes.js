const router = require('express').Router();
const userServices =require('./users.services');
const jwtPassport=require("../middlewares/passport.middleware")


router.route('/allusers')
.get(userServices.getAllUsers);

router.route('/newuser')
.post(userServices.postNewUser);

router.route("/user/:id")
  .get(userServices.getUserById);

router.route('/me')
.get(jwtPassport.authenticate("jwt",{session:false}),userServices.getMyUser)
.put(jwtPassport.authenticate("jwt",{session:false}),userServices.updateUser)
.delete(jwtPassport.authenticate("jwt",{session:false}),userServices.deleteUser);
  
module.exports =router;

