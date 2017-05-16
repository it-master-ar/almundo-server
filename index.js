const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

const db = require('./db')

const logger = require('./middlewares/logger')
const error = require('./middlewares/error')

const rootRoute = require('./routes/root')
const userRoute = require('./routes/user')
const indexRoute = require('./routes/index')

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '/views'))

app.use(bodyParser.json())
app.use('/public', express.static('public'))

app.use(logger)

app.use('/', rootRoute)
app.use('/user', userRoute)
app.use('/index', indexRoute)

app.use(error)

db.connect((err) => {
  if (err) {
    console.log('ERROR')
    return
  }

  app.listen(3000, () => {
    console.log('Server Started...')
  })
})
