const express = require("express");

const Food = require("../models/projects.models");

const app = express();

const cors = require("cors");
app.use(cors())

const router = express.Router();

// make router for frontend

// posting food
router.post("", cors(), async (req, res) => {
    try {
      const food = await Food.create(req.body);
      res.send(food);
    }
    catch (err) {
      res.send(err.message);
    }
})

// getting food
router.get("", cors(),async (req, res) => {
  try {
    const food = await Food.find().lean().exec();
    return res.send(food);
    // res.send(food);
  } catch (err) {
    res.status(520).send(err.message);
  }
});


module.exports = router;