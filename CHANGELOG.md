# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.1.3](https://github.com/es-shims/Set.prototype.isSupersetOf/compare/v1.1.2...v1.1.3) - 2024-04-06

### Commits

- [Refactor] update spec from https://github.com/tc39/ecma262/pull/3306 [`4f1b73f`](https://github.com/es-shims/Set.prototype.isSupersetOf/commit/4f1b73fd6898ab96337a0ecdb953429b8522a008)
- [Deps] update `es-abstract` [`56b26f7`](https://github.com/es-shims/Set.prototype.isSupersetOf/commit/56b26f7c16071dc8b46b720ef2b4e40cb5977d42)
- [Dev Deps] update `@es-shims/api` [`033cb58`](https://github.com/es-shims/Set.prototype.isSupersetOf/commit/033cb58e9d74bc6e0deda525290c4d2f4b5d1869)

## [v1.1.2](https://github.com/es-shims/Set.prototype.isSupersetOf/compare/v1.1.1...v1.1.2) - 2024-03-19

### Commits

- [meta] remove useless ESM [`b8ca68c`](https://github.com/es-shims/Set.prototype.isSupersetOf/commit/b8ca68c52d1de1e2d7b5e9a7bfa73d702015bd61)
- [Deps] update `call-bind`, `es-abstract`, `es-errors`, `is-set` [`ee159df`](https://github.com/es-shims/Set.prototype.isSupersetOf/commit/ee159df178e24d9ee22a702961f2a9614e4c2494)
- [actions] remove redundant finisher [`307c80f`](https://github.com/es-shims/Set.prototype.isSupersetOf/commit/307c80f606dc431bb1d13e633bcede5c0484a073)
- [Dev Deps] update `tape` [`c562c44`](https://github.com/es-shims/Set.prototype.isSupersetOf/commit/c562c4459d38a7964ad16fb94c8d7f0ed2bc7e92)

## [v1.1.1](https://github.com/es-shims/Set.prototype.isSupersetOf/compare/v1.1.0...v1.1.1) - 2024-02-04

### Commits

- [Tests] increase coverage [`26547ae`](https://github.com/es-shims/Set.prototype.isSupersetOf/commit/26547ae9c5a0c160ad1c0636994cb35b5f062b09)
- [Tests] ensure test mocks return iterators [`d1a89d3`](https://github.com/es-shims/Set.prototype.isSupersetOf/commit/d1a89d343a2355f53642211a0f0b231eb9922345)
- [Tests] increase coverage [`3182aa6`](https://github.com/es-shims/Set.prototype.isSupersetOf/commit/3182aa6fef7b6b33706f039c8222a1cc79cafc7a)
- [Refactor] use `es-errors`, so things that only need those do not need `get-intrinsic` [`1367361`](https://github.com/es-shims/Set.prototype.isSupersetOf/commit/1367361bdb5190a33993516f9185446d3d54053e)
- [Deps] update `call-bind`, `define-properties`, `es-abstract`, `es-set`, `get-intrinsic` [`0b2b950`](https://github.com/es-shims/Set.prototype.isSupersetOf/commit/0b2b950e2cfe9714f193113bad2a24af47c85b2b)
- [Dev Deps] update `aud`, `npmignore`, `object-inspect`, `tape` [`dd80031`](https://github.com/es-shims/Set.prototype.isSupersetOf/commit/dd800318765bbe340bd3763143e0afa131e28444)
- [Dev Deps] update `tape` [`887b424`](https://github.com/es-shims/Set.prototype.isSupersetOf/commit/887b4242ebd765dd441124556b904602dd53f2cc)

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
