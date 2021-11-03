import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import { ConfirmedValidator } from './confirmed.validator';
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
    this.registrationForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        username: ['', [Validators.required]],
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
      }
      // {
      //   validator: ConfirmedValidator('password', 'confirm_password'),
      // }
    );
    this.registrationForm.valueChanges.subscribe(console.log);
  }
  // Reference - https://jasonwatmore.com/post/2019/05/22/angular-7-tutorial-part-5-registration-form-user-service
  get Register() {
    return this.registrationForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registrationForm.invalid) {
      return;
    }
    alert(
      'You have successfully logged in!' +
        JSON.stringify(this.registrationForm.value, null, 4)
    );
  }
}
