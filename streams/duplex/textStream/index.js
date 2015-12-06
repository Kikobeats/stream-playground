'use strict'

var textStream = require('./textStream')
var text = textStream(69)

text.pipe(process.stdout)

text.on('end', function (obj) {
  console.log('\nend!')
  console.log(obj)
})
