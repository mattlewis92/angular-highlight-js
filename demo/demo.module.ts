import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import 'highlight.js/styles/github.css';
import { HighlightJsModule } from '../src';
import { DemoComponent } from './demo.component';
import { HIGHLIGHT_JS } from '../src/highlightJs.token';

export function highlightJsFactory(): any {
  // only register the typescript language
  const hljs: any = require('highlight.js/lib/highlight');
  hljs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'));
  return hljs;
}

@NgModule({
  declarations: [DemoComponent],
  imports: [
    BrowserModule,
    HighlightJsModule.forRoot({
      provide: HIGHLIGHT_JS,
      useFactory: highlightJsFactory
    })
  ],
  bootstrap: [DemoComponent]
})
export class DemoModule {}