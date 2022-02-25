const express = require("express");

const connect = require("./configs/db");

const cors = require("cors");

const mongoose = require('mongoose');

const { register, login } = require("./controllers/auth.controller");
const userController = require("./controllers/user.controller");

const food = require("./controllers/projects.controllers");

const type = require('../src/controllers/type.controller');

const category = require('../src/controllers/category.controller');

const search = require("../src/controllers/search.controller");


const app = express();
app.use(cors());


app.use(express.json());

//register
app.post("/register", register);
// .login
app.post("/login", login);

app.use("/users", userController);

app.use("/foods", food);

app.use("/type", type);

app.use("/category", category);

app.use("/name", search);

app.listen(2345, async () => {
    try {
        await connect();
        console.log("running on port 2345")
    }
    catch (err) {
        console.log(err.message)
    }
});