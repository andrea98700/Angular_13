import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserClass } from '../classes/userClass';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.user = new UserClass();
    this._user = new UserClass();
    this.userCopy = new UserClass();
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
        const id = Number(param['id']);
        const user = this.userService.getUser(id);
        if(user) {
          this.user = user;
        }
      }
    );
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
