const mongoose = require("mongoose");

const TextTypeSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = TextType = mongoose.model("textType", TextTypeSchema);