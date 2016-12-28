import { Component } from '@angular/core';

@Component({
  selector: 'mwl-demo-app',
  template: '<pre><code mwlHighlightJs [source]="source" language="typescript"></code></pre>'
})
export class DemoComponent {

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
