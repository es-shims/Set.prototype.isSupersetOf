'use strict';

var $TypeError = require('es-errors/type');

var $Set = require('es-set/polyfill')();

var GetIteratorFromMethod = require('es-abstract/2024/GetIteratorFromMethod');
var GetSetRecord = require('./aos/GetSetRecord');
var IteratorClose = require('es-abstract/2024/IteratorClose');
var IteratorStepValue = require('es-abstract/2024/IteratorStepValue');
var NormalCompletion = require('es-abstract/2024/NormalCompletion');

var isSet = require('is-set');

var tools = require('es-set/tools');
var $setHas = tools.has;
var $setSize = tools.size;

module.exports = function isSupersetOf(other) {
	var O = this; // step 1

	// RequireInternalSlot(O, [[SetData]]); // step 2
	if (!isSet(O) && !(O instanceof $Set)) {
		throw new $TypeError('Method Set.prototype.isSupersetOf called on incompatible receiver ' + O);
	}

	var otherRec = GetSetRecord(other); // step 3

	var thisSize = $setSize(O); // SetDataSize(O.[[SetData]]) // step 4

	if (thisSize < otherRec['[[Size]]']) {
		return false; // step 5
	}

	var keysIter = GetIteratorFromMethod(otherRec['[[Set]]'], otherRec['[[Keys]]']); // step 6
	var next = true; // step 7
	while (!keysIter['[[Done]]']) { // step 8
		next = IteratorStepValue(keysIter); // step 8.a
		if (!keysIter['[[Done]]']) { // step 8.b
			// if (!SetDataHas(O.[[SetData]], next)) { // step 8.b.i
			if (!$setHas(O, next)) {
				IteratorClose(keysIter, NormalCompletion()); // step 8.b.i.1
				return false; // step 8.b.ii.2
			}
		}
	}

	return true; // step 9
};
