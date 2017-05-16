const Router = require('express').Router
const router = new Router()

const db = require('../db')
const User = db.mongoose.model('User')

const root = { name: 'root' }

router.get('/', (req, res) => {
  User.find({}, (err, result) => {
    if (err) { return res.status(500).send(err) }

    res.send(result)
  })
})

router.get('/root', (req, res) => {
  res.send(root)
})

router.get('/:id', (req, res, next) => {
  User.findById(req.params.id, (err, user) => {
    if (err) { return res.status(500).send(err) }

    if (!user) { return res.send(404) }

    res.send(user)
  })
})

router.post('/', (req, res) => {
  const user = new User(req.body)

  user.save((err, result) => {
    if (err) { return res.status(500).send(err) }

    res.send(result)
  })
})

module.exports = router
