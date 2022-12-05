'use strict';

var getPolyfill = require('./polyfill');
var define = require('define-properties');
var shimSet = require('es-set/shim');

module.exports = function shimSetIsSupersetOf() {
	shimSet();

	var polyfill = getPolyfill();
	define(
		Set.prototype,
		{ isSupersetOf: polyfill },
		{ isSupersetOf: function () { return Set.prototype.isSupersetOf !== polyfill; } }
	);

	return polyfill;
};
