import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async signIn(form: NgForm) {
    //const resp = await this.auth.signIn(form.value.email, form.value.password).toPromise();
    //alert(resp.access)
    let result = this.auth.signIn(form.value.email, form.value.password);
    if(result) { // si può anche mettere this.auth.isUserLoggedIn()
      this.router.navigate(['']);
    }
    /*if(!form.valid) {
      return false;
    } else {
      return true;
    }*/

  }

}
