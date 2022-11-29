import { Component } from '@angular/core';
import { UserClass } from './classes/userClass';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // inizio lezioni 31-32-33-34 / pipes
  //title = 'angular pipes';

  //birthDate = new Date();
  // fine lezioni / pipes
  showForm = false;
  userSelected: UserClass = new UserClass();

  updateUser(user: UserClass) {
    this.showForm = true;
    this.userSelected = user;
  }

  newUser() {
    this.userSelected = new UserClass();
    this.showForm = true;
  }
}
