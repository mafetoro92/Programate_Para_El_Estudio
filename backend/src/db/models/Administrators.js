const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const AdministratorSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    role: { type: String, required: true },
  },
);

const Administrator = model('Administrator', AdministratorSchema);
module.exports = Administrator;