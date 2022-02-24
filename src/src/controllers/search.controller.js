const express = require("express");

const Food = require("../models/projects.models");

const router = express.Router();

const app = express();
const cors = require("cors");
app.use(cors())


router.get("/:name",cors(), async (req, res) => {
    try {
        const food = await Food.find({ name: req.params.name }).lean().exec();
        console.log({ name: req.params.name });
        return res.status(200).send(food);
    } catch (err) {
        res.status(501).send(err.message);
    }
});

module.exports = router;