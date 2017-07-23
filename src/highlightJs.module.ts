import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { HighlightJsDirective } from './highlightJs.directive';

@NgModule({
  declarations: [HighlightJsDirective],
  exports: [HighlightJsDirective]
})
export class HighlightJsModule {

  static forRoot(hljs: Provider): ModuleWithProviders { //tslint:disable-line
    return {
      ngModule: HighlightJsModule,
      providers: [hljs]
    };
  }

}