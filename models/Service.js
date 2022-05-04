const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    sequence: {
        type: Number,
        required: true
    },

})

module.exports = Service = mongoose.model("service", ServiceSchema);