'use strict'

var util = require('util')
var Stream = require('readable-stream').Stream

function KeyInputStream () {
  Stream.Writable.call(this)
}

util.inherits(KeyInputStream, Stream.Writable)

KeyInputStream.prototype._write = function (chunk, encode, next) {
  var text = chunk.toString()
  console.log('You write:', text)
  next()
}

module.exports = function () {
  return new KeyInputStream()
}
