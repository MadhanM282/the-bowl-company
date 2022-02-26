const express = require("express");

const Food = require("../models/projects.models");

const router = express.Router();

const app = express();

router.get("/:type", async (req, res) => {
    try {
      const food = await Food.find({ type: req.params.type }).lean().exec();
      return res.send(food);
      // res.send(food);
    } catch (err) {
      res.status(520).send(err.message);
    }
  });

  module.exports = router