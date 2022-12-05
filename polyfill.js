'use strict';

var Set = require('es-set/polyfill')();

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	return typeof Set.prototype.isSupersetOf === 'function' ? Set.prototype.isSupersetOf : implementation;
};
