const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

require("dotenv").config();
const { findUserById } = require("../users/users.controllers");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_WORD,
};

passport.use(
  new JwtStrategy(options, (tokenDecoded, done) => {
    findUserById(tokenDecoded.id)
      .then((user) => {
        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      })
      .catch((err) => {
        done(err, false);
      });
  })
);

module.exports = passport;
