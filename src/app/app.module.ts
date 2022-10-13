import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionsComponent } from './sections/sections.component';
import { StepsComponent } from './sections/steps/steps.component';
import { StaticConfigComponent } from './sections/steps/static-config/static-config.component';
import { StepConfigComponent } from './sections/steps/step-config/step-config.component';
import { StepRowComponent } from './sections/steps/step-config/step-row/step-row.component';
import { ApiDisplayComponent } from './sections/steps/api-display/api-display.component';
import { ConfigHeaderComponent } from './sections/steps/static-config/config-header/config-header.component';
import { ConnectionComponent } from './sections/steps/step-config/connection/connection.component';
import { ConncetionItemComponent } from './sections/steps/api-display/conncetion-item/conncetion-item.component';
import { DisplayItemComponent } from './sections/steps/api-display/display-item/display-item.component';
import { StepInputComponent } from './sections/steps/step-config/step-row/step-input/step-input.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionsComponent,
    StepsComponent,
    StaticConfigComponent,
    StepConfigComponent,
    StepRowComponent,
    ApiDisplayComponent,
    ConfigHeaderComponent,
    ConnectionComponent,
    ConncetionItemComponent,
    DisplayItemComponent,
    StepInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
