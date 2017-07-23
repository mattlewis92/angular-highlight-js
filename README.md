# angular highlight js
[![Build Status](https://travis-ci.org/mattlewis92/angular-highlight-js.svg?branch=master)](https://travis-ci.org/mattlewis92/angular-highlight-js)
[![npm version](https://badge.fury.io/js/angular-highlight-js.svg)](http://badge.fury.io/js/angular-highlight-js)
[![devDependency Status](https://david-dm.org/mattlewis92/angular-highlight-js/dev-status.svg)](https://david-dm.org/mattlewis92/angular-highlight-js#info=devDependencies)
[![GitHub issues](https://img.shields.io/github/issues/mattlewis92/angular-highlight-js.svg)](https://github.com/mattlewis92/angular-highlight-js/issues)
[![GitHub stars](https://img.shields.io/github/stars/mattlewis92/angular-highlight-js.svg)](https://github.com/mattlewis92/angular-highlight-js/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/mattlewis92/angular-highlight-js/master/LICENSE)

## Demo
https://mattlewis92.github.io/angular-highlight-js/demo/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

Highlight.js integration for angular 4.0+

## Installation

Install through npm:
```
npm install --save angular-highlight-js
```

Then include in your apps module:

```typescript
import { Component, NgModule } from '@angular/core';
import * as hljs from 'highlight.js';
import { HighlightJsModule, HIGHLIGHT_JS } from 'angular-highlight-js';

// alternatively if you only need to include a subset of languages
const hljs: any = require('highlight.js/lib/highlight');
hljs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'));

export function highlightJsFactory() {
  return hljs;
}

@NgModule({
  imports: [
    HighlightJsModule.forRoot({
      provide: HIGHLIGHT_JS,
      useFactory: highlightJsFactory
    })
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<pre><code mwlHighlightJs [source]="source" language="typescript"></code></pre>'
})
export class MyComponent {

  source: string = `
import { Component } from '@angular/core';

@Component({
  template: 'Hello {{ name }}'
})
class HelloWorldComponent {
  name: string = 'World!';
}
`.trim();

}
```

You may also find it useful to view the [demo source](https://github.com/mattlewis92/angular-highlight-js/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/dist/umd/angular-highlight-js/angular-highlight-js.js"></script>
<script>
    // everything is exported angularHighlightJs namespace
</script>
```

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM (should come with)
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
```bash
npm run release
```

## License

MIT
