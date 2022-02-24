const express = require("express");

const Food = require("../models/projects.models");

const router = express.Router();

const app = express();
const cors = require("cors");
app.use(cors())


router.get("/:name",cors(), async (req, res) => {
    try {
        const query = {};
  // assign search value to query.name
//   if (req.query.search) {
    query.name = { $regex: req.query.name, $options: 'i' };
        const food = await Food.find(query.name).lean().exec();
// {$or:[{ name: req.params.name },{name: {$in:req.params.name }}]}
        console.log({ name: req.params.name });
        return res.status(200).send(food);
    } catch (err) {
        res.status(501).send(err.message);
    }
});

module.exports = router;