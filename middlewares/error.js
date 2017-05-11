function error (err, req, res, next) {
  let message = 'Unexpected Error'
  err.statusCode = err.statusCode || 500

  if (err.statusCode === 404) {
    message = 'Not Found'
  }

  message = `${err.resource} ${message}`

  res.status(err.statusCode)
    .send({ message })
}

module.exports = error
