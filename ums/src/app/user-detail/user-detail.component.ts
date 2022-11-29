import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserClass } from '../classes/userClass';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private userCopy: UserClass; //variabile usata per non modificare il valore originale di user (solo la prima volta)
  private _user: UserClass; //variabile che prende valore dal form di modifica

  @Input() set user(user: UserClass) {
    this._user = user;
    this.userCopy = Object.assign({}, user);
  }
  get user() {
    return this._user;
  }
  //userService: UserService;

  constructor(private userService: UserService) {
    this.user = new UserClass();
    this._user = new UserClass();
    this.userCopy = new UserClass();
    //this.userService = userService;
  }

  ngOnInit(): void {
  }

  saveUser() {
    if(this.user.id > 0) {
      this.userService.updateUser(this.user);
    } else {
      this.userService.createUser(this.user);
      this.user = new UserClass();
    }
  }

  resetForm(form: FormGroup) {
    if(this.user.id === 0) {
      this.user = new UserClass();
    } else {
      this.user = this.userCopy;
    }
  }

}
