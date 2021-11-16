const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ResultSchema = new Schema(
  {
    user_id: {type: String},
    userFullName: {type: String, required: true, maxlength: 45},
    htmlScore: {type: Number, required: true},
    cssScore: {type: Number, required: true},
    javascriptScore: {type: Number, required: true},
    pythonScore: {type: Number, required: true},
    soloLearnScore: {type: Number, required: true},
    personalProfileScore: {type: Number, required: true},
    motivationScore: {type: Number, required: true},
    finalScore: {type: Number, required: true},
    pass: {type: Boolean}
  }
);

const Result = model('Result', ResultSchema)

module.exports = Result 