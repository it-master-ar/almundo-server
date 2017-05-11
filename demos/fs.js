const fs = require('fs')

fs.writeFile('test.txt', 'Testing...', (err) => {
  if (err) {
    return console.log(err)
  }

  console.log('File saved.')

  fs.readFile('test.txt', (err, data) => {
    if (err) {
      return console.error('ERROR', err)
    }

    console.log('SUCCESS', data)
  })
})
