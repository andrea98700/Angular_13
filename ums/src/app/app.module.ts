import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import { UcfirstPipe } from './ucfirst.pipe';
import { NavComponent } from './nav/nav.component';
import { UserDataComponent } from './user-data/user-data.component';

registerLocaleData(localeIt);

@NgModule({
  declarations: [
    AppComponent,
    UcfirstPipe,
    NavComponent,
    UserDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
