'use strict'

var Stream = require('readable-stream').Stream

var CONST = {
  START: 64,
  END: 75
}

// Option 1: based on composition
module.exports = function () {
  var stream = Stream.Readable()
  var counter = Number(CONST.START)

  stream._read = function () {
    var _this = this
    var iv = setInterval(function () {
      if (++counter < CONST.END) return _this.push(String.fromCharCode(counter))
      clearInterval(iv)
      _this.push(null)
    }, 50)
  }
  return stream
}

// Option 2: based on inheritance
// var inherits = require('inherits')
// function KeyOutputStream (opts, cb) {
//   if (!(this instanceof KeyOutputStream)) return new KeyOutputStream(opts, cb)
//   Stream.Readable.call(this)
//   this.counter = Number(CONST.START)
// }
//
// module.exports = KeyOutputStream
// inherits(KeyOutputStream, Stream.Readable)
//
// KeyOutputStream.prototype._read = function () {
//   var _this = this
//   var iv = setInterval(function () {
//     if (++_this.counter < CONST.END)
//       return _this.push(String.fromCharCode(_this.counter))
//     clearInterval(iv)
//     _this.push(null)
//   }, 50)
// }
