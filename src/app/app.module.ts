import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BasicHighLightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highLights/better-highlght.directive';
import { CustomPropertyBiding } from './custom-property-biding/custom-property.directive';
import { UnlessDirective } from './unless.directive';
@NgModule({
  declarations: [
    AppComponent,
    BasicHighLightDirective,
    BetterHighlightDirective,
    CustomPropertyBiding,
    UnlessDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
