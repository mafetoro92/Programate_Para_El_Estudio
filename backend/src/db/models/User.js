const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  firstName: {
        type: String,
        required: true,
        maxlength: 45
  },
  middleName: {
        type: String,
        required: true,
        maxlength: 45
  },
  lastName: {
        type: String,
        required: true,
        maxlength: 45
  },
      secondSurname: {
        type: String,
        required: true,
        maxlength: 45
      },
  email: {
    type: String,
    trim: true,
    require: true,
    unique: true,
    lowercase: true,
  },
    contactNumber: {
        type: Number,
        required: true
      },
  img:{
      type: String,
      trim: true,
  },
  rol: {
      candidate:{
        type: Boolean,
        default: true,
      },
      student:{
        type: Boolean,
        default: false,
      },
      developer:{
        type: Boolean,
        default: false,
      },
  },
  
  programa:{
    type : String,
    default : "Programate"
  },

  cohorte:{
      num:{
        type : Number,
        require: true
      },
      name:{
        type : String,
        require: true
      }

  },
  estado:{
      type: Boolean,
      default : true
  },

  passwordHash: {
    type: String,
    require: true,
    min :8,
  },
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})

const User = model('User', userSchema)

module.exports = User