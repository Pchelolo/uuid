"use strict";
const assert = require('assert');

const helper = {
	assertInstanceOf: function (instance, constructor) {
    assert.notEqual(instance, null, 'Expected instance, obtained ' + instance);
    assert.ok(instance instanceof constructor, 'Expected instance of ' + constructor.name + ', actual constructor: ' + instance.constructor.name);
  }
}

module.exports = helper;
