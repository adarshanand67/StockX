const mongoose = require("mongoose");

// model for stocks
// fieldsL name, date, open, high, low, close, adjClose, volume
const stockSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    open: {
        type: Number,
        required: true,
    },
    high: {
        type: Number,
        required: true,
    },
    low: {
        type: Number,
        required: true,
    },
    close: {
        type: Number,
        required: true,
    },
    adjClose: {
        type: Number,
        required: true,
    },
    volume: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("Stock", stockSchema);
