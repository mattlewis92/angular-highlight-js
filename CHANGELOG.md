# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="2.0.1"></a>
## [2.0.1](https://github.com/mattlewis92/angular-highlight-js/compare/v2.0.0...v2.0.1) (2017-10-18)


### Bug Fixes

* ensure language and source are non-falsy ([b5bd002](https://github.com/mattlewis92/angular-highlight-js/commit/b5bd002))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/mattlewis92/angular-highlight-js/compare/v1.0.2...v2.0.0) (2017-07-23)


### Bug Fixes

* **aot:** make the library AoT compatible ([f16f242](https://github.com/mattlewis92/angular-highlight-js/commit/f16f242))
* use InjectionToken over deprecated OpaqueToken ([4dafcfd](https://github.com/mattlewis92/angular-highlight-js/commit/4dafcfd))


### BREAKING CHANGES

* angular 4 or higher is now required to use this library
* **aot:** you must now pass a `Provider` to the `HighlightJsModule.forRoot` method instead of

the hljs instance directly



<a name="1.0.2"></a>
## [1.0.2](https://github.com/mattlewis92/angular-highlight-js/compare/v1.0.1...v1.0.2) (2017-03-24)


### Bug Fixes

* loosen peer dependency to allow angular 4 ([b3434fa](https://github.com/mattlewis92/angular-highlight-js/commit/b3434fa))



<a name="1.0.1"></a>
## [1.0.1](https://github.com/mattlewis92/angular-highlight-js/compare/v1.0.0...v1.0.1) (2016-12-28)


### Bug Fixes

* implement a workaround for a bug with angular ([69593ab](https://github.com/mattlewis92/angular-highlight-js/commit/69593ab))



<a name="1.0.0"></a>
# 1.0.0 (2016-12-28)


### Features

* add the highlightJs directive ([3dbd173](https://github.com/mattlewis92/angular-highlight-js/commit/3dbd173))
