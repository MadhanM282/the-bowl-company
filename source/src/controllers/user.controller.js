const express = require("express");

const router = express.Router();
const User = require('../models/user.model');

router.get("/email", async (req, res) => {
  try {
    const users = await User.findOne({email: req.query.email}).lean().exec();
    return res.send({ name:users.first_name });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});


module.exports = router;