"use strict";
const util = require('util');

/**
 * Forward-compatible unsafe allocation of buffer.
 * @type {Function}
 */
const allocBufferUnsafe = Buffer.allocUnsafe;

/**
 * Forward-compatible allocation of buffer to contain a string.
 * @type {Function}
 */
const allocBufferFromString = Buffer.from;

/**
 * Forward-compatible allocation of buffer from an array of bytes
 * @type {Function}
 */
const allocBufferFromArray = Buffer.from;

exports.allocBufferUnsafe = allocBufferUnsafe;
exports.allocBufferFromArray = allocBufferFromArray;
exports.allocBufferFromString = allocBufferFromString;