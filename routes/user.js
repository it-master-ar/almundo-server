const Router = require('express').Router
const router = new Router()

const root = { name: 'root' }
const user1 = { name: 'Juan1' }
const user2 = { name: 'Juan2' }
const user3 = { name: 'Juan3' }

const users = [user1, user2, user3]

router.get('/', (req, res) => {
  res.send(users)
})

router.get('/root', (req, res) => {
  res.send(root)
})

router.get('/:name', (req, res, next) => {
  const user = users.find(u =>
    u.name === req.params.name
  )

  if (!user) {
    const err = {
      statusCode: 404,
      resource: 'user'
    }

    return next(err)
  }

  res.send(user)
})

module.exports = router
