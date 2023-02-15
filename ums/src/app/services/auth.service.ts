import { EventEmitter, Injectable, Output } from '@angular/core';
import { UserClass } from '../classes/userClass';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isUserLogged = true;
  @Output() userSignIn = new EventEmitter<UserClass>();
  @Output() userSignUp = new EventEmitter<UserClass>();
  @Output() userSignOut = new EventEmitter();

  constructor() { }

  isUserLoggedIn() {
    this.isUserLogged = !!localStorage.getItem('token');
    return this.isUserLogged;
  }

  signIn(email: string, password: string) {
    localStorage.setItem('token', email);
    let user = new UserClass();
    user.nome = 'Test';
    user.email = email;
    this.userSignIn.emit(user);
    return true;
  }

  signUp(email: string, password: string, username: string) {
    localStorage.setItem('token', email);
    let user = new UserClass();
    user.nome = username;
    user.email = email;
    this.userSignUp.emit(user);
    return true;
  }

  signOut() {
    localStorage.removeItem('token');
    this.userSignOut.emit();
    this.isUserLogged = false;
  }

}
