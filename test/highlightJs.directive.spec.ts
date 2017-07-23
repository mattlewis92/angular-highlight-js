import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { expect } from 'chai';
import * as hljs from 'highlight.js';
import { HighlightJsModule } from '../src/highlightJs.module';
import { HIGHLIGHT_JS } from '../src/highlightJs.token';

@Component({
  template: '<pre><code mwlHighlightJs [source]="source" language="html"></code></pre>'
})
class TestComponent {
  source: string = '<div class="bar">foo</div>';
}

function highlightJsFactory(): any {
  return hljs;
}

describe('highlightJs directive', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HighlightJsModule.forRoot({
        provide: HIGHLIGHT_JS,
        useFactory: highlightJsFactory
      })],
      declarations: [TestComponent]
    });
  });

  it('should highlight the source code', () => {
    const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('code').innerHTML).to.equal('<span class="hljs-tag">&' +
      'lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-' +
      'string">"bar"</span>&gt;</span>foo<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>');
  });

});