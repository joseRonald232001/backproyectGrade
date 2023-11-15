const checkUserCredentials = require("./auth.controllers");
const jwt = require('jsonwebtoken')
const SECRET_WORD=process.env.SECRET_WORD;
require('dotenv').config();


const postLogin = (req, res) => {
  const { email, password } = req.body;
  checkUserCredentials(email, password)
    .then((data) => {
      if (!data) {
        return res.status(401).json({ message: "invalid credentials" });
      }
      const token =jwt.sign({
        id:data.id,
        role:data.role
      },SECRET_WORD)
      res.status(200).json({token});
    })
    .catch((err) => res.status(400).json(err));
};

module.exports = postLogin;
 