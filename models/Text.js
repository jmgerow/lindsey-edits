const mongoose = require("mongoose");

const TextSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    textTypeId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Text = mongoose.model("text", TextSchema);