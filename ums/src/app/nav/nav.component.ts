import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, Event, NavigationEnd  } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserClass } from './../classes/userClass';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Output() onNewUser = new EventEmitter();
  public isUserLoggedIn = false;
  public isUserRegistered = false;
  public username: string | undefined;
  public currentRoute: string = "";

  constructor(private auth: AuthService, private router: Router) {
    auth.userSignIn.subscribe(
      (user: UserClass) => {
        this.username = user.nome;
        this.isUserLoggedIn = true;
      }
    );

    auth.userSignUp.subscribe(
      (user: UserClass) => {
        this.username = user.nome;
        this.isUserRegistered = true;
      }
    );

    auth.userSignOut.subscribe(
      () => {
        this.username = '';
        this.isUserLoggedIn = false;
        this.isUserRegistered = false;
      }
    );

    this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {
          this.currentRoute = event.url;
      }


    });
  }

  ngOnInit(): void {
    this.isUserLoggedIn = this.auth.isUserLoggedIn();
    this.isUserRegistered = this.auth.isUserRegistered();
  }

  newUser() {
    this.onNewUser.emit();
  }

  signOut(e: { preventDefault: () => void; }) {
    e.preventDefault();
    this.auth.signOut();
    //setTimeout(() => {
      this.router.navigate(['login']);
    //}, 300);
  }

  signIn(e: { preventDefault: () => void; }) {
    e.preventDefault();
    this.router.navigate(['login']);
  }

  signUp(e: { preventDefault: () => void; }) {
    e.preventDefault();
    this.router.navigate(['registrazione']);
  }

}
