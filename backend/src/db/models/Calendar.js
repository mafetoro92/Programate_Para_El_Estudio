const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const CalendarSchema = new Schema(
  {
    users: Array,
    datestart: {type:Date, required: true},
    dateend: {type:Date, required: true},
    hourstart: {type:String, required: true},
    hourend: {type:String, required: true},
    title: {type:String, required:true},
    link: {type:String, required:true},
    description: {type:String, required:true},
    quotas: {type:Number, required: true}
  }
);

const Calendar = model('Calendar', CalendarSchema)

module.exports = Calendar