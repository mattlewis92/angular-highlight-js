import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import 'highlight.js/styles/github.css';
import { HighlightJsModule } from '../src';
import { DemoComponent } from './demo.component';

// only register the typescript language
const hljs: any = require('highlight.js/lib/highlight');
hljs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'));

@NgModule({
  declarations: [DemoComponent],
  imports: [
    BrowserModule,
    HighlightJsModule.forRoot(hljs)
  ],
  bootstrap: [DemoComponent]
})
export class DemoModule {}