const mongoose = require('mongoose')
const config = require('./config')

const userSchema = require('./schemas/user')

class DB {
  constructor () {
    this.mongoose = mongoose
    this._setSchemas()
  }

  connect (done) {
    this.mongoose.connect(config.mongoUrl, (err) => {
      if (err) { return done(err) }

      console.log('MongoDB Connected...')
      done(null)
    })
  }

  _setSchemas () {
    this.mongoose.model('User', userSchema)
  }
}

module.exports = new DB()
