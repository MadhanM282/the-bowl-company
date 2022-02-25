const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: false },
  mobile_number: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, {
    versionKey: false,
    timestamps: true,
});


userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();

  var hash = bcrypt.hashSync(this.password, 8);
  this.password = hash;
  return next();
});

userSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};
const User = mongoose.model("user", userSchema);

module.exports = User;



