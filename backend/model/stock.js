const mongoose = require("mongoose");

// model for stocks
// fieldsL name, date, open, high, low, close, adjClose, volume
const stockSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        // required: true,
    },
    Date: {
        type: Date,
        default: Date.now,
    },
    Open: {
        type: Number,
        required: true,
    },
    High: {
        type: Number,
        required: true,
    },
    Low: {
        type: Number,
        required: true,
    },
    Close: {
        type: Number,
        required: true,
    },
    "Adj Close": {
        type: Number,
        required: true,
    },
    Volume: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("Stock", stockSchema);
