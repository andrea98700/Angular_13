import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserClass } from '../classes/userClass';
import { UserService } from '../services/user.service';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrashArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input('user-data') user: UserClass | undefined;
  @Output('onDeleteUser') onDeleteUser = new EventEmitter();
  @Output() onSelectUser = new EventEmitter();
  faPencil = faPencil;
  faTrash = faTrashArrowUp;

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit(): void {
  }

  deleteUser() {
    this.onDeleteUser.emit(this.user);
  }

  updateUser() {
    //this.route.navigate(['users', this.user?.id, 'edit']);
    //this.onSelectUser.emit(this.user);
  }
}
