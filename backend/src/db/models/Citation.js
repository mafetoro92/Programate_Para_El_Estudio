const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const CitationSchema = new Schema({
    users: Array,
    date: { type: Date, required: true },
    journey: { type: Number, required: true },
    quotasCompleted: { type: Number, required: true },
    maxQuotas: { type: Number, required: true },
});

const Citation = model("Citation", CitationSchema);

module.exports = Citation;
