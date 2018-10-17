"use strict";
const assert = require('assert');

function noop() {}

const helper = {
	/**
	 * @param {Number} count
	 * @param {Function} iteratorFunc
	 * @param {Function} [callback]
	 */
	times: function(count, iteratorFunc, callback) {
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
	}, 
	assertInstanceOf: function (instance, constructor) {
    assert.notEqual(instance, null, 'Expected instance, obtained ' + instance);
    assert.ok(instance instanceof constructor, 'Expected instance of ' + constructor.name + ', actual constructor: ' + instance.constructor.name);
	},
}

module.exports = helper;
