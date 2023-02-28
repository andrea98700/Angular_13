import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { faCheckCircle, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {

  isConfirmPasswordDirty = false;
  faCheck = faCheckCircle;
  faXmark = faXmarkCircle;

  /*confirmPasswordForm = this.formBuilder.group({
    validator: this.checkPasswords('form.value.password', 'form.value.confermapassword')
  })*/

  constructor(private auth: AuthService, private router: Router/*, private formBuilder: FormBuilder*/) { }

  ngOnInit(): void {
  }

  signUp(form: NgForm) {
    let result = this.auth.signUp(form.value.name, form.value.email, form.value.password, form.value.confermapassword);
    let isSamePassword = this.checkPasswords(form.value.password, form.value.confermapassword);
    if(result && isSamePassword) {
      this.router.navigate(['']);
    }
  }

  checkPasswords(password: string, confermapassword: string) {
    (password === confermapassword) ? this.isConfirmPasswordDirty = true : this.isConfirmPasswordDirty = false;
    return this.isConfirmPasswordDirty;
  }

}
