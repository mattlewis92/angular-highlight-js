import { Directive, Input, OnChanges, SimpleChanges, Inject } from '@angular/core';
import { HIGHLIGHT_JS } from './highlightJs.token';

@Directive({
  selector: '[mwlHighlightJs]',
  host: {
    '[innerHTML]': 'highlightedCode'
  }
})
export class HighlightJsDirective implements OnChanges {

  @Input() source: string;

  @Input() language: string;

  highlightedCode: string;

  constructor(@Inject(HIGHLIGHT_JS) private hljs) {} //tslint:disable-line

  ngOnChanges(changes: SimpleChanges): void {
    if ((changes['source'] || changes['language']) && this.language && this.source) {
      this.highlightedCode = this.hljs.highlight(this.language, this.source).value;
    }
  }

}
