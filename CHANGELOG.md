# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.1.0](https://github.com/es-shims/Set.prototype.isSupersetOf/compare/v1.0.2...v1.1.0) - 2023-07-18

### Commits

- [patch] remove GetKeysIterator and its callable check [`9e0f82f`](https://github.com/es-shims/Set.prototype.isSupersetOf/commit/9e0f82f7d643e89f3bc3646de5d4780891193e90)
- [Deps] update `define-properties`, `es-abstract`, `get-intrinsic` [`4f2e788`](https://github.com/es-shims/Set.prototype.isSupersetOf/commit/4f2e78898c482aadbc4322bd5f5cd36d57a34461)
- [patch] throw on negative set sizes [`932548f`](https://github.com/es-shims/Set.prototype.isSupersetOf/commit/932548f45e08875eada66ce0f43ebece84010c97)
- [Dev Deps] update `@es-shims/api`, `@ljharb/eslint-config`, `aud`, `es6-shim`, `tape` [`ac8c1b5`](https://github.com/es-shims/Set.prototype.isSupersetOf/commit/ac8c1b54a069b31332cfa58382986e8074ed0231)

## [v1.0.2](https://github.com/es-shims/Set.prototype.isSupersetOf/compare/v1.0.1...v1.0.2) - 2023-01-15

### Commits

- [Fix] properly handle StopIteration envs, like FF 42 [`c989d58`](https://github.com/es-shims/Set.prototype.isSupersetOf/commit/c989d58ca65f8e1e6d1420549e5ca77e2a5d2529)
- [Dev Deps] update `object-inspect` [`bfc1d3e`](https://github.com/es-shims/Set.prototype.isSupersetOf/commit/bfc1d3e97aa5c1badb458e3f71295ade5d6e59bc)

## [v1.0.1](https://github.com/es-shims/Set.prototype.isSupersetOf/compare/v1.0.0...v1.0.1) - 2023-01-11

### Commits

- [Fix] handle node 2, where `Set` needs polyfilling, thus there are two potential `has`/`size` methods [`1a255f5`](https://github.com/es-shims/Set.prototype.isSupersetOf/commit/1a255f572204446f38582a9d9aeaba1767ceb799)
- [readme] link to all set method packages [`2198eaa`](https://github.com/es-shims/Set.prototype.isSupersetOf/commit/2198eaa076393bb525597efb81d8c2e7989f61f6)
- [Tests] add missing builtin-shimmed tests [`56c18d4`](https://github.com/es-shims/Set.prototype.isSupersetOf/commit/56c18d435c54169c4f52ee449f906a27951c39f6)
- [Fix] close the iterator [`832b901`](https://github.com/es-shims/Set.prototype.isSupersetOf/commit/832b901fb2464bb21f83790b1b292bfebe669e1e)
- [Deps] update `es-abstract`, `es-set` [`2703b39`](https://github.com/es-shims/Set.prototype.isSupersetOf/commit/2703b393f67f029d21ff4ea8a7bf11247d63a1ba)
- [Dev Deps] update `aud`, `es6-shim` [`5d3426b`](https://github.com/es-shims/Set.prototype.isSupersetOf/commit/5d3426bbc18da557123434ae070c73cf76a319b3)
- [Deps] update `es-abstract` [`2f94029`](https://github.com/es-shims/Set.prototype.isSupersetOf/commit/2f94029b5a7b73254624ee963616885314165159)
- [Dev Deps] update `@ljharb/eslint-config` [`31ea244`](https://github.com/es-shims/Set.prototype.isSupersetOf/commit/31ea2447888154d81dfb6cd9880a0706ab646596)

## v1.0.0 - 2022-12-05

### Commits

- Initial implementation, tests, readme [`ad0bc29`](https://github.com/es-shims/Set.prototype.isSupersetOf/commit/ad0bc29a0964f80af2dbc7fa6406b661298dd585)
- Initial commit [`0bb1e4f`](https://github.com/es-shims/Set.prototype.isSupersetOf/commit/0bb1e4f0fbe44b052e81cf1b3246c0f84cd6133b)
- npm init [`60ff0a7`](https://github.com/es-shims/Set.prototype.isSupersetOf/commit/60ff0a764bcb51e5095750e839a661c0f1b88dd1)
- Only apps should have lockfiles [`9d961c6`](https://github.com/es-shims/Set.prototype.isSupersetOf/commit/9d961c69616a6bd77995edbdd27cc0c1e0ee6741)
