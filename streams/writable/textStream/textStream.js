'use strict'

var fs = require('fs')
var util = require('util')
var Stream = require('readable-stream').Stream

var text = [
  'hello world',
  'foo bar',
  'say my name'
]

module.exports = function () {
  var ws = Stream.Writable()

  var interval = setInterval(function () {
    console.log('here')
    console.log(ws.write)
    ws.write(text.pop())

    if (text.length === 0) {
      interval.clearInterval()
      ws.end()
    }

  }, 1000)

}
