'use strict';

var GetIntrinsic = require('get-intrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var $Set = require('es-set/polyfill')();

var isNativeSet = typeof Set === 'function' && $Set === Set;

var IteratorClose = require('es-abstract/2022/IteratorClose');
var IteratorStep = require('es-abstract/2022/IteratorStep');
var IteratorValue = require('es-abstract/2022/IteratorValue');
var NormalCompletion = require('es-abstract/2022/NormalCompletion');

var gOPD = require('es-abstract/helpers/getOwnPropertyDescriptor');

var GetKeysIterator = require('./aos/GetKeysIterator');
var GetSetRecord = require('./aos/GetSetRecord');

var isSet = require('is-set');

var callBind = isNativeSet || require('call-bind'); // eslint-disable-line global-require
var callBound = isNativeSet && require('call-bind/callBound'); // eslint-disable-line global-require

var $setForEach = isNativeSet ? callBound('Set.prototype.forEach') : callBind($Set.prototype.forEach);
var $setHas = isNativeSet ? callBound('Set.prototype.has') : callBind($Set.prototype.has);
var $setSize = isNativeSet ? callBound('Set.prototype.size') : gOPD ? callBind(gOPD($Set.prototype, 'size').get) : function setSize(set) {
	var count = 0;
	$setForEach(set, function () {
		count += 1;
	});
	return count;
};

module.exports = function isSupersetOf(other) {
	var O = this; // step 1

	// RequireInternalSlot(O, [[SetData]]); // step 2
	if (!isSet(O) && !(O instanceof $Set)) {
		throw new $TypeError('Method Set.prototype.isSupersetOf called on incompatible receiver ' + O);
	}

	var otherRec = GetSetRecord(other); // step 3

	var thisSize = $setSize(O); // step 4

	if (thisSize < otherRec['[[Size]]']) {
		return false; // step 5
	}

	var keysIter = GetKeysIterator(otherRec); // step 6
	var next = true; // step 7
	while (next) { // step 8
		next = IteratorStep(keysIter['[[Iterator]]']); // step 8.a
		if (next) { // step 8.b
			var nextValue = IteratorValue(next); // step 8.b.i
			// if (!SetDataHas(O.[[SetData]], nextValue)) { // step 8.b.ii
			if (!$setHas(O, nextValue)) {
				IteratorClose(keysIter['[[Iterator]]'], NormalCompletion());
				return false;
			}
		}
	}

	return true; // step 9
};
