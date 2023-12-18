'use strict';

var $Set = require('es-set/polyfill')();
var forEach = require('for-each');
var v = require('es-value-fixtures');
var debug = require('object-inspect');
var $Map = require('es-map/polyfill')();

module.exports = function (isSupersetOf, t) {
	t.test('throws on non-set receivers', function (st) {
		forEach(v.primitives.concat(v.objects, [], new $Map()), function (nonSet) {
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

	t.test('test262: test/built-ins/Set/prototype/isSupersetOf/allows-set-like-object', function (st) {
		var s1 = new $Set([1, 2]);
		var s2 = {
			size: 1,
			has: function () {
				throw new EvalError('Set.prototype.isSupersetOf should not call its argument’s has method');
			},
			keys: function () {
				var result = {
					done: false,
					value: 1
				};
				return {
					next: function () {
						try {
							return result;
						} finally {
							result = {
								done: true
							};
						}
					}
				};
			}
		};

		st.equal(isSupersetOf(s1, s2), true);

		st.end();
	});

	t.test('test262: test/built-ins/Set/prototype/isSupersetOf/compares-Map', function (st) {
		var s1 = new $Set([1, 2]);
		var m1 = new $Map([
			[2, 'two'],
			[3, 'three']
		]);

		st.equal(isSupersetOf(s1, m1), false);

		st.end();
	});

	t.test('test262: test/built-ins/Set/prototype/isSupersetOf/compares-empty-sets', function (st) {
		var s1 = new $Set([]);
		var s2 = new $Set([1, 2]);

		st.equal(isSupersetOf(s1, s2), false);

		var s3 = new $Set([1, 2]);
		var s4 = new $Set([]);

		st.equal(isSupersetOf(s3, s4), true);

		var s5 = new $Set([]);
		var s6 = new $Set([]);

		st.equal(isSupersetOf(s5, s6), true);

		st.end();
	});

	t.test('test262: test/built-ins/Set/prototype/isSupersetOf/compares-itself', function (st) {
		var s1 = new $Set([1, 2]);

		st.equal(isSupersetOf(s1, s1), true);

		st.end();
	});

	t.test('test262: test/built-ins/Set/prototype/isSupersetOf/compares-same-sets', function (st) {
		var s1 = new $Set([1, 2]);
		var s2 = new $Set([1, 2]);

		st.equal(isSupersetOf(s1, s2), true);

		st.end();
	});

	t.test('test262: test/built-ins/Set/prototype/isSupersetOf/has-is-callable', function (st) {
		var s1 = new $Set([1, 2]);
		var s2 = {
			size: 2,
			has: undefined,
			keys: function () {
				return [2, 3];
			}
		};
		st['throws'](
			function () { isSupersetOf(s1, s2); },
			TypeError,
			'GetSetRecord throws an error when has is undefined'
		);

		s2.has = {};
		st['throws'](
			function () { isSupersetOf(s1, s2); },
			TypeError,
			'GetSetRecord throws an error when has is not callable'
		);

		st.end();
	});

	t.test('test262: test/built-ins/Set/prototype/isSupersetOf/keys-is-callable', function (st) {
		var s1 = new $Set([1, 2]);
		var s2 = {
			size: 2,
			has: function () {},
			keys: undefined
		};
		st['throws'](
			function () { isSupersetOf(s1, s2); },
			TypeError,
			'GetSetRecord throws an error when keys is undefined'
		);

		s2.keys = {};
		st['throws'](
			function () { isSupersetOf(s1, s2); },
			TypeError,
			'GetSetRecord throws an error when keys is not callable'
		);

		st.end();
	});

	t.test('test262: test/built-ins/Set/prototype/isSupersetOf/set-like-array', function (st) {
		var s1 = new $Set([1, 2]);
		var s2 = [5, 6];
		s2.size = 3;
		s2.has = function (x) {
			if (x === 1) { return true; }
			if (x === 2) { return true; }
			throw new EvalError('Set.prototype.isSupersetOf should only call its argument’s has method with contents of this');
		};
		s2.keys = function () {
			throw new EvalError('Set.prototype.isSupersetOf should not call its argument’s keys iterator when this.size ≤ arg.size');
		};

		st.equal(isSupersetOf(s1, s2), false);

		st.end();
	});

	t.test('test262: test/built-ins/Set/prototype/isSupersetOf/set-like-class-mutation', function (st) {
		var baseSet = new $Set(['a', 'b', 'c']);

		var evilSetLike = {
			size: 3,
			has: function () {
				throw new EvalError('Set.prototype.isSupersetOf should not call its argument”s has method');
			},
			keys: function () {
				var steps = [
					function () { return { done: false, value: 'a' }; },
					function () {
						baseSet['delete']('b');
						baseSet['delete']('c');
						baseSet.add('b');
						return { done: false, value: 'b' };
					}
				];
				return {
					next: function () {
						return steps.length > 0 ? steps.shift()() : { done: true };
					}
				};
			}
		};

		var result = isSupersetOf(baseSet, evilSetLike);
		st.equal(result, true);

		var expectedNewBase = new $Set(['a', 'b']);
		st.deepEqual(baseSet, expectedNewBase, 'original Set is mutated as expected');

		st.end();
	});

	t.test('test262: test/built-ins/Set/prototype/isSupersetOf/size-is-a-number', function (st) {
		var s1 = new $Set([1, 2]);
		var s2 = {
			size: undefined,
			has: function () {},
			keys: function () {
				return [2, 3];
			}
		};

		forEach([undefined, NaN, 'string'].concat(v.bigints), function (size) {
			s2.size = size;
			st['throws'](
				function () { isSupersetOf(s1, s2); },
				TypeError,
				'GetSetRecord throws an error when size is ' + debug(size)
			);
		});

		var coercionCalls = 0;
		s2.size = {
			valueOf: function () {
				coercionCalls += 1;
				return NaN;
			}
		};
		st['throws'](
			function () { isSupersetOf(s1, s2); },
			TypeError,
			'GetSetRecord throws an error when size coerces to NaN'
		);
		st.equal(coercionCalls, 1, 'GetSetRecord coerces size');

		st.end();
	});

	return t.comment('tests completed');
};
