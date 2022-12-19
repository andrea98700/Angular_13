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

  user : UserInterface | undefined;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
