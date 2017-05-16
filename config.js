const config = {
  port: process.env.PORT || 3000,
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost/almundo'
}

module.exports = config
