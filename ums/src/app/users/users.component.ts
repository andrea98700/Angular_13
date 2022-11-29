import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { UserClass } from "../classes/userClass";
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: [
    'users.component.css'
  ]
})

export class UsersComponent implements OnInit{

  title = 'Users';
  public users: UserClass[] = [];
  @Output() updateUser = new EventEmitter<UserClass>();

  constructor(private service: UserService) {

  }

  ngOnInit() {
    this.users = this.service.getUsers();
  }

  onDeleteUser(user: UserClass) {
    this.service.deleteUser(user);
  }

  onSelectUser(user: UserClass) {
    const userCopy = Object.assign({}, user);
    this.updateUser.emit(userCopy);
  }
}
