const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ConvocatorySchema = new Schema(
  {
    name: {type: String, required: true, maxlength:45 },
    initialDate: {type:Date, required: true},
    finallDate: {type:Date, required: true},
    program: {type:String, required:true, maxlength: 45},
    maxQuotas: {type:Number, required:true},
    initialBootcampDate: {type:Date, required: true},
    finalBootcampDate: {type:Date, required: true},
    usersRegisted: Array,
    test: Object
  }
);

const Convocatory = model('Convocatory', ConvocatorySchema)

module.exports = Convocatory