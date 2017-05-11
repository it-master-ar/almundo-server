const Router = require('express').Router
const router = new Router()

function handler (req, res, next) {
  res.send('Welcome Almundo API')
}

router.get('/', handler)

module.exports = router
