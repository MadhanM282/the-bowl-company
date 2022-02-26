require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const { v4: uuidv4 } = require("uuid");

const User = require("../models/user.model");
// process.env.GOOGLE_CLIENT_IDprocess.env.GOOGLE_CLIENT_SECRET
passport.use(
  new GoogleStrategy(
    {
      clientID:"185288388593-ccb2rhaf3aus46ippr28g835ru68fad6.apps.googleusercontent.com" ,
      clientSecret:"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" ,
      callbackURL: "http://localhost:2345/auth/google/callback",
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
