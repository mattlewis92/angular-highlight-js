import { NgModule, ModuleWithProviders } from '@angular/core';
import { HighlightJsDirective } from './highlightJs.directive';
import { HIGHLIGHT_JS } from './highlightJs.token';

@NgModule({
  declarations: [HighlightJsDirective],
  exports: [HighlightJsDirective]
})
export class HighlightJsModule {

  static forRoot(hljs): ModuleWithProviders { //tslint:disable-line
    return {
      ngModule: HighlightJsModule,
      providers: [{
        provide: HIGHLIGHT_JS,
        // workaround a bug with angular where circular objects can't be used as DI tokens
        useValue: {highlight: (language, source) => hljs.highlight(language, source)}
      }]
    };
  }

}