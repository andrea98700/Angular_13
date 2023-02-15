import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule, registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import { UcfirstPipe } from './ucfirst.pipe';
import { NavComponent } from './nav/nav.component';
import { UserDataComponent } from './user-data/user-data.component';
import { RequiredFieldsComponent } from './required-fields/required-fields.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { HttpClientModule } from '@angular/common/http'

registerLocaleData(localeIt);

@NgModule({
  declarations: [
    AppComponent,
    UcfirstPipe,
    NavComponent,
    UserDataComponent,
    RequiredFieldsComponent,
    UsersComponent,
    UserComponent,
    UserDetailComponent,
    LoginComponent,
    RegistrazioneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    CommonModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: [
    UserService,
    AuthService
  ],
})

export class AppModule { }
