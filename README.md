# set.prototype.issupersetof <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

ES Proposal spec-compliant shim for Set.prototype.isSupersetOf. Invoke its "shim" method to shim `Set.prototype.isSupersetOf` if it is unavailable or noncompliant.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment, and complies with the [proposed spec](https://github.com/tc39/proposal-set-methods). When shimmed, it uses [`es-set`](https://npmjs.com/es-set) to shim the `Set` implementation itself if needed.

Most common usage:
```js
var assert = require('assert');
var isSupersetOf = require('set.prototype.issupersetof');

var set1 = new Set([1, 2]);
var set2 = new Set([2, 3]);
var set3 = new Set([1]);

assert.equal(isSupersetOf(set1, set2), false);
assert.equal(isSupersetOf(set2, set1), false);
assert.equal(isSupersetOf(set1, set3), true);

isSupersetOf.shim();

assert.equal(set1.isSupersetOf(set2), false);
assert.equal(set2.isSupersetOf(set1), false);
assert.equal(set1.isSupersetOf(set3), true);
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.com/package/set.prototype.issupersetof
[npm-version-svg]: http://versionbadg.es/es-shims/Set.prototype.isSupersetOf.svg
[deps-svg]: https://david-dm.org/es-shims/Set.prototype.isSupersetOf.svg
[deps-url]: https://david-dm.org/es-shims/Set.prototype.isSupersetOf
[dev-deps-svg]: https://david-dm.org/es-shims/Set.prototype.isSupersetOf/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/Set.prototype.isSupersetOf#info=devDependencies
[testling-svg]: https://ci.testling.com/es-shims/Set.prototype.isSupersetOf.png
[testling-url]: https://ci.testling.com/es-shims/Set.prototype.isSupersetOf
[npm-badge-png]: https://nodei.co/npm/set.prototype.issupersetof.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/set.prototype.issupersetof.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/set.prototype.issupersetof.svg
[downloads-url]: http://npm-stat.com/charts.html?package=set.prototype.issupersetof
[codecov-image]: https://codecov.io/gh/es-shims/Set.prototype.isSupersetOf/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/es-shims/Set.prototype.isSupersetOf/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/es-shims/Set.prototype.isSupersetOf
[actions-url]: https://github.com/es-shims/Set.prototype.isSupersetOf/actions
