require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const { v4: uuidv4 } = require("uuid");

const User = require("../models/user.model");
// process.env.GOOGLE_CLIENT_IDprocess.env.GOOGLE_CLIENT_SECRET
passport.use(
  new GoogleStrategy(
    {
      clientID:"1069955961937-9ecj2diaatshl45mbmhfgndjv1lp7fhc.apps.googleusercontent.com",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5503/index.html",
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, done) {
      let user = await User.findOne({ email: profile?.email }).lean().exec();

      if (!user) {
        user = await User.create({
          email: profile?.email,
          password: uuidv4(),
          role: ["customer"],
        });
      }

      return done(null, user);
    }
  )
);

module.exports = passport;
