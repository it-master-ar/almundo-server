const express = require('express')
const path = require('path')
const app = express()

const logger = require('./middlewares/logger')
const error = require('./middlewares/error')

const rootRoute = require('./routes/root')
const userRoute = require('./routes/user')
const indexRoute = require('./routes/index')

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '/views'))
app.use('/public', express.static('public'))

app.use(logger)

app.use('/', rootRoute)
app.use('/user', userRoute)
app.use('/index', indexRoute)

app.use(error)

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
