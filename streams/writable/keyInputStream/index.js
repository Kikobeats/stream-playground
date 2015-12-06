'use strict'

var keyInputStream = require('./keyInputStream.js')
var key = keyInputStream()

// is the same than
// process.stdin.pipe(key)
process.stdin.on('data', function (text) {
  var s = text.toString().trim()
  if (s !== 'exit') return key.write(text)
  console.log('bye!')
  process.exit(0)
})
