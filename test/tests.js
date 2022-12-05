'use strict';

var $Set = require('es-set/polyfill')();
var forEach = require('for-each');
var v = require('es-value-fixtures');
var debug = require('object-inspect');

module.exports = function (isSupersetOf, t) {
	t.test('throws on non-set receivers', function (st) {
		forEach(v.primitives.concat(v.objects), function (nonSet) {
			st['throws'](
				function () { isSupersetOf(nonSet, {}); },
				TypeError,
				debug(nonSet) + ' is not a Set'
			);
		});

		st.end();
	});

	t.test('non-Setlike `other`', function (st) {
		var set = new $Set([1, 2]);

		forEach(v.primitives, function (primitive) {
			st['throws'](
				function () { isSupersetOf(set, primitive); },
				TypeError,
				debug(primitive) + ' is not a Set-like'
			);
		});

		st.test('unable to get a Set Record', function (s2t) {
			forEach(v.objects, function (nonSetlike) {
				s2t['throws'](
					function () { isSupersetOf(set, nonSetlike); },
					TypeError,
					debug(nonSetlike) + ' is an Object, but is not Set-like'
				);
			});

			forEach([NaN, 'NaN'], function (nonNumber) {
				var nanSizedSetlike = {
					has: function () {},
					keys: function () {},
					size: nonNumber
				};
				s2t['throws'](
					function () { isSupersetOf(set, nanSizedSetlike); },
					TypeError,
					debug(nanSizedSetlike) + ' has a NaN `.size`'
				);
			});

			forEach(v.nonFunctions, function (nonFunction) {
				var badHas = {
					has: nonFunction,
					keys: function () {},
					size: 0
				};
				var badKeys = {
					has: function () {},
					keys: nonFunction,
					size: 0
				};

				s2t['throws'](
					function () { isSupersetOf(set, badHas); },
					TypeError,
					debug(badHas) + ' has a non-callable `.has`'
				);
				s2t['throws'](
					function () { isSupersetOf(set, badKeys); },
					TypeError,
					debug(badKeys) + ' has a non-callable `.keys`'
				);
			});

			s2t.end();
		});

		st.end();
	});

	t.test('supersets', function (st) {
		var set1 = new $Set([1, 2, 3]);
		var set2 = new $Set([4, 5, 6]);
		var set3 = new $Set([1, 2, 3, 4, 5, 6]);

		st.equal(
			isSupersetOf(set1, set2),
			false,
			debug(set1) + ' is not a superset of ' + debug(set2)
		);
		st.equal(
			isSupersetOf(set2, set1),
			false,
			debug(set2) + ' is not a superset of ' + debug(set1)
		);
		st.equal(
			isSupersetOf(set3, set1),
			true,
			debug(set3) + ' is a superset of ' + debug(set1)
		);
		st.equal(
			isSupersetOf(set3, set2),
			true,
			debug(set3) + ' is a superset of ' + debug(set2)
		);

		st.end();
	});

	return t.comment('tests completed');
};
