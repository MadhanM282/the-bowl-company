const express = require("express");

const connect = require("./configs/db");

const cors = require("cors");

// const mongoose = require('mongoose');

const User = require("./models/user.model");

const { register, login, newToken } = require("./controllers/auth.controller");

const userController = require("./controllers/user.controller");

const food = require("./controllers/projects.controllers");

const type = require("../src/controllers/type.controller");

const category = require("../src/controllers/category.controller");

const search = require("../src/controllers/search.controller");

const { body, validationResult } = require("express-validator");

// const passport = require("./configs/google-oauth");

const app = express();
app.use(cors());

app.use(express.json());

//register
app.post(
  "/register",
  body("first_name")
    .isString()
    .isLength({ min: 3, max: 20 })
    .withMessage("First name should be 3 to 20 characters long"),
  body("last_name").isLength({ min: 3, max: 20 }),
  body("mobile_number")
    .isNumeric()
    .isLength({ min: 10, max: 12 })
    .withMessage("Please enter a valid number"),
  body("email")
    .isEmail()
    .custom(async (value) => {
      const user = await User.findOne({ email: value });
      if (user) {
        throw new Error("Email already exists");
      }
      return true;
    }),
  body("password")
    .isLength({ min: 8, max: 20 })
    .custom((value) => {
      let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
      if (pattern.test(value)) {
        return true;
      }
      throw new Error("Password is not strong");
    }),
  register
);
// .login
app.post("/login", login);

app.use("/users", userController);

app.use("/foods", food);

app.use("/type", type);

app.use("/category", category);

app.use("/name", search);

// passport.serializeUser(function (user, done) {
//   done(null, user);
// });

// passport.deserializeUser(function (user, done) {
//   done(null, user);
// });

// app.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["email", "profile"] })
// );

// app.get(
//   "/auth/google/callback",
//   passport.authenticate("google", {
//     failureRedirect: "/auth/google/failure",
//   }),
//   (req, res) => {
//     const { user } = req;
//     const token = newToken(user);

//     return res.send({ user, token });
//   }
// );

app.listen(2345, async () => {
  try {
    await connect();
    console.log("running on port 2345");
  } catch (err) {
    console.log(err.message);
  }
});
