import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightJsModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, HighlightJsModule],
  bootstrap: [DemoComponent],
  providers: []
})
export class DemoModule {}