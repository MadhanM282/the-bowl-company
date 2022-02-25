require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const newToken = (user) => {
    return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
};
// console.log(process.env.JWT_SECRET_KEY);
const register = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email }).lean().exec();
        if (user) {
            return res.status(400).send({ massage: "Please try another email" });
            
        }
        user = await User.create(req.body);
        const token = newToken(user);

        res.send({ user, token });
    } catch (err) {
        res.status(500).send(err.message);
    }
};
const login = async (req, res) => {
   
    try {
        // we will try to find the user with the email provided
        const user = await User.findOne({ email: req.body.email });

        // If user is not found then return error
        if (!user)
            return res
                .status(400)
                .send({ message: "Please try another email or password" });

        // if user is found then we will match the passwords
        const match = user.checkPassword(req.body.password);

        if (!match)
            return res
                .status(400)
                .send({ message: "Please try another email or password" });

        // then we will create the token for that user
        const token = newToken(user);

        // then return the user and the token
        res.send({ user, token });
    } catch (err) {
        res.status(500).send(err.message);
    }
};
module.exports = { register, login };
