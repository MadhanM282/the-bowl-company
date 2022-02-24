const mongoose = require("mongoose");

// 1 categorry of project mobile example ucan change with food also 
const foodSchemas = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        category: { type: String, required: true},
        price: { type: Number, required: true },
        image: { type:String },
        type: { type: String, required: false }
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Food = mongoose.model("Item", foodSchemas);

module.exports = Food;

