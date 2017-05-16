const Router = require('express').Router
const router = new Router()

router.get('/', (req, res) => {
  res.render('index', { title: 'Hola!' })
})

module.exports = router
