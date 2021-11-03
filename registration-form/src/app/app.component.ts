import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'registration-form';
  registrationForm: FormGroup = new FormGroup({});
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: [
        '',
        [Validators.required],
        Validators.pattern('^[A-Za-z][A-Za-z0-9_]$'), // Pattern Source- https://laasyasettyblog.hashnode.dev/validating-username-using-regex
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@[-`{-~]).{6,64}$'
          ), // Pattern Source - https://stackoverflow.com/questions/30299464/pattern-password-javascript
          Validators.min(8),
        ],
      ],
      confirmPassword: ['', [Validators.required]],
    });
    // this.registrationForm.valueChanges.subscribe(console.log);
  }
  // Reference - https://jasonwatmore.com/post/2019/05/22/angular-7-tutorial-part-5-registration-form-user-service
  get Register() {
    return this.registrationForm.controls;
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    this.submitted = true;
    if (this.registrationForm.invalid) {
      return;
    }

    alert('You have successfully logged in!');
  }
}
