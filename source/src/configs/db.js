const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect(
        "mongodb+srv://madhan:mohan@cluster0.m9cyo.mongodb.net/project?retryWrites=true&w=majority"
    );
};

// here connect your atlas application to mongoose 