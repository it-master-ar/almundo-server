const http = require('http')
const config = require('./config')

// crear un web server que responde "Hello Server" a todos los requests.
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})

  const body = []
  req.on('data', (chunk) => {
    console.log('Request Body', chunk.toString())
    body.push(chunk)
  })

  req.on('end', () => {
    console.log('END', body.toString())
    res.end(body.toString())
  })
})

server.listen(config.port, () => {
  console.log(`Server running at :${config.port}`)
})
