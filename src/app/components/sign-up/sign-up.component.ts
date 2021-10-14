import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { User } from 'src/app/models/user';
import { SignUpService } from 'src/app/services/sign-up.service';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  userData: User;

  constructor(private signUpService: SignUpService) {

  }

  ngOnInit() {

  }

  form = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    dateOfBirth: new FormControl('', [Validators.required]),
    email: new FormControl('',
      [Validators.required,
      Validators.email
      ]),

    password: new FormControl('', [Validators.required,
    Validators.minLength(8)
    ])
  });

  get firstName() {
    return this.form.get('firstName');
  }
  get lastName() {
    return this.form.get('lastName');
  }
  get dateOfBirth() {
    return this.form.get('dateOfBirth');
  }
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }

  signUp() {

    if (this.form.valid) {
      this.userData = {
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        dob: this.form.value.dateOfBirth,
        email: this.form.value.email,
        password: this.form.value.password
      }
      this.signUpService.createUser(this.userData).subscribe();

    } else {
      this.form.setErrors({
        inValidData: true
      })
    }

  }


}
