'use strict'

var keyOutputStream = require('./keyOutputStream.js')
var key = keyOutputStream()

key.pipe(process.stdout)

key.on('end', function () {
  console.log('\nEND!')
})
