const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ResultSchema = new Schema(
  {
<<<<<<< HEAD
    user_id: {type: String },
=======
    user_id: {type: String},
>>>>>>> 9dd96099426b41082e69c0c6c882e2493890fb94
    userFullName: {type: String, required: true, maxlength: 45},
    htmlScore: {type: Number, required: true},
    cssScore: {type: Number, required: true},
    javascriptScore: {type: Number, required: true},
<<<<<<< HEAD
    pythonScore: {type: Number},
    Score: {type: Number},
    soloLearnScore: {type: Number},
    personalProfileScore: {type: Number},
    motivationScore: {type: Number},
    finalScore: {type: Number}
=======
    pythonScore: {type: Number, required: true},
    soloLearnScore: {type: Number, required: true},
    personalProfileScore: {type: Number, required: true},
    motivationScore: {type: Number, required: true},
    finalScore: {type: Number, required: true},
    pass: {type: Boolean}
>>>>>>> 9dd96099426b41082e69c0c6c882e2493890fb94
  }
);

const Result = model('Result', ResultSchema)

module.exports = Result 