'use strict'

var c = 64
var LIMIT = 75
var through2 = require('through2')
var duplexify = require('duplexify')

var inherits = require('inherits')
var Stream = require('readable-stream').Stream
var Readable = require('readable-stream').Readable
var Duplex = require('readable-stream').Duplex

module.exports = function (limit) {
  limit = limit || LIMIT
  var readable = through2()

  var iv = setInterval(function () {
    if (++c < limit) return readable.write(String.fromCharCode(c))
    clearInterval(iv)
    readable.emit('end', 'lol')
  }, 50)

  return readable
}
