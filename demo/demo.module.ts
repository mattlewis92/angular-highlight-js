import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import 'highlight.js/styles/github.css';
import * as hljs from 'highlight.js/lib/highlight';
import * as hljsTypescript from 'highlight.js/lib/languages/typescript';
import { HighlightJsModule } from '../src';
import { DemoComponent } from './demo.component';
import { HIGHLIGHT_JS } from '../src/highlightJs.token';

export function highlightJsFactory(): any {
  // only register the typescript language
  hljs.registerLanguage('typescript', hljsTypescript);
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