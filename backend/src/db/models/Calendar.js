const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const CalendarSchema = new Schema(
  {
    users: Object,
    start: {type:Date, required: true},
    end: {type:Date, required: true},
    title: {type:String, required:true},
    link: {type:String, required:true},
    notes: {type:String, required:true},
    quotas: {type:Number, required: true}
  }
);
  // const events2 = [{
  //   id: new Date().getTime(),
  //   title: 'Cumpleaños del jefe',
  //   start: moment().toDate(),
  //   end: moment().add( 2, 'hours' ).toDate(),
  //   notes: 'Comprar el pastel',
  //   user: {
  //       _id: '123',
  //       name: 'Fernando'
  //   }
  // }]

const Calendar = model('Calendar', CalendarSchema)

module.exports = Calendar