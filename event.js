const EventEmitter = require('events').EventEmitter

class MyEmitter extends EventEmitter {
  constructor () {
    super()

    let count = 5

    let timer = setInterval(() => {
      this.emit('hi', { msg: 'Hello Server!' })
      count--

      if (!count) {
        this.emit('bye', 'I am done here.')
        clearInterval(timer)
      }
    }, 1000)

    this.on('listen', (e) => {
      console.log('Listening...', e)
    })
  }
}

let myEmitter = new MyEmitter()

myEmitter.on('hi', (msg) => {
  console.log(msg)
})

myEmitter.emit('listen', 'info evento')

myEmitter.on('bye', (msg) => {
  console.log(msg, 'bye!')
})
