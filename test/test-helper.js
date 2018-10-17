"use strict";
const assert = require('assert');

const helper = {
	/**
	 * Creates a ccm cluster, initializes a Client instance the before() and after() hooks, create
	 * @param {Number|String} nodeLength A number representing the amount of nodes in a single datacenter or a string
	 * representing the amount of nodes in each datacenter, ie: "3:4".
	 * @param {Object} [options]
	 * @param {Object} [options.ccmOptions]
	 * @param {Boolean} [options.initClient] Determines whether to create a Client instance.
	 * @param {Object} [options.clientOptions] The options to use to initialize the client.
	 * @param {String} [options.keyspace] Name of the keyspace to create.
	 * @param {Number} [options.replicationFactor] Keyspace replication factor.
	 * @param {Array<String>} [options.queries] Queries to run after client creation.
	 */
	assertInstanceOf: function (instance, constructor) {
    assert.notEqual(instance, null, 'Expected instance, obtained ' + instance);
    assert.ok(instance instanceof constructor, 'Expected instance of ' + constructor.name + ', actual constructor: ' + instance.constructor.name);
  }
}

module.exports = helper;
