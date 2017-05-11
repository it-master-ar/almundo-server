const express = require('express')
const app = express()

const logger = require('./middlewares/logger')
const error = require('./middlewares/error')

const rootRoute = require('./routes/root')
const userRoute = require('./routes/user')

app.use('/public', express.static('public'))

app.use(logger)

app.use('/', rootRoute)
app.use('/user', userRoute)

app.use(error)

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
