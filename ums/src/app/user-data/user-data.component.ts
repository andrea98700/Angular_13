import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { UserInterface } from './../interfaces/userInterface';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  public user : UserInterface | undefined; //se non lo metto public non è visibile nel template user-data.component.html

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      param => {
        const id = Number(param['id']);
        const user = this.userService.getUser(id);
        if(user) {
          this.user = user;
        }
      }
    );
  }

}
