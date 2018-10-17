"use strict";
const util = require('util');

function noop() {}

/**
 * Forward-compatible unsafe allocation of buffer.
 * @type {Function}
 */
const allocBufferUnsafe = Buffer.allocUnsafe || allocBufferDeprecated;

/**
 * Forward-compatible allocation of buffer to contain a string.
 * @type {Function}
 */
const allocBufferFromString = (Int8Array.from !== Buffer.from && Buffer.from) || allocBufferFromStringDeprecated;

/**
 * Forward-compatible allocation of buffer from an array of bytes
 * @type {Function}
 */
const allocBufferFromArray = (Int8Array.from !== Buffer.from && Buffer.from) || allocBufferFromArrayDeprecated;

function allocBufferDeprecated(size) {
  // eslint-disable-next-line
  return new Buffer(size);
}

function allocBufferFromStringDeprecated(text, encoding) {
  if (typeof text !== 'string') {
    throw new TypeError('Expected string, obtained ' + util.inspect(text));
  }
  // eslint-disable-next-line
  return new Buffer(text, encoding);
}

function allocBufferFromArrayDeprecated(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected Array, obtained ' + util.inspect(arr));
  }
  // eslint-disable-next-line
  return new Buffer(arr);
}

/**
 * @param {Number} count
 * @param {Function} iteratorFunc
 * @param {Function} [callback]
 */
function times(count, iteratorFunc, callback) {
  callback = callback || noop;
  count = +count;
  if (isNaN(count) || count === 0) {
    return callback();
  }
  let completed = 0;
  for (let i = 0; i < count; i++) {
    iteratorFunc(i, next);
  }
  function next(err) {
    if (err) {
      const cb = callback;
      callback = noop;
      return cb(err);
    }
    if (++completed !== count) {
      return;
    }
    callback();
  }
}

exports.allocBufferUnsafe = allocBufferUnsafe;
exports.allocBufferFromArray = allocBufferFromArray;
exports.allocBufferFromString = allocBufferFromString;
exports.times = times; 