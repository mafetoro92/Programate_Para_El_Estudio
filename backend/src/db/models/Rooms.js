const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const RoomSchema = new Schema(
  {
    interviewers: {type: Array, required: true},
    observers: {type: Array, required: true},
    candidates: {type: Array, required: true}
    
  }
);

const Room = model('Room', RoomSchema)

module.exports = Room