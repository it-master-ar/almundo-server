const Schema = require('mongoose').Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    unique: true
  }
})

module.exports = userSchema
