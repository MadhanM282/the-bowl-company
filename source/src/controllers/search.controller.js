const express = require("express");

const Food = require("../models/projects.models");

const router = express.Router();

const app = express();


router.get("/search", async (req, res) => {
    try {
        const query = req.query.search;
        const food = await Food.find({name:{ $regex: query, $options: 'i' }});
        console.log({ query});
        return res.status(200).send(food);
    } catch (err) {
        res.status(501).send(err.message);
    }
});

module.exports = router;