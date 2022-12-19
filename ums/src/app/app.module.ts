import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import { UcfirstPipe } from './ucfirst.pipe';
import { NavComponent } from './nav/nav.component';

registerLocaleData(localeIt);

@NgModule({
  declarations: [
    AppComponent,
    UcfirstPipe,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
