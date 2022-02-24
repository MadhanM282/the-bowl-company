const express = require("express");

const connect = require("./configs/db");




const food = require("./controllers/projects.controllers");


const type = require('../src/controllers/type.controller');

const category = require('../src/controllers/category.controller');
const search = require("../src/controllers/search.controller");


const app = express();



app.use(express.json());

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