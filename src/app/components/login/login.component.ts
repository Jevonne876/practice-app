import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form = new FormGroup({
    email: new FormControl('',
      [Validators.required,
      Validators.email
      ]),

    password: new FormControl('', [Validators.required,
    Validators.minLength(8)
    ])
  });

  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }

  login() {
    this.form.setErrors({
      invalidLogin: true
    });
  }

}
