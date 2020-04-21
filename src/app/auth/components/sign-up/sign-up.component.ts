import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  @Output() signup = new EventEmitter();
  signUpForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.buildLoginForm();
  }

  buildLoginForm() {
    this.signUpForm = this.fb.group({
      email: ['', Validators.required, Validators.email],
      name: ['', Validators.required],
      passsword: ['', Validators.required],
      confirmPasssword: ['', Validators.required]
    }, {validators: this.passwordMatchValidator});
  }


  passwordMatchValidator(frm: FormGroup) {
    return frm.controls.passsword.value === frm.controls.confirmpasssword.value ? null : {mismatch: true};
  }

  submit() {
    if (this.signUpForm.valid) {
      this.signup.emit(this.signUpForm.value);
    }
  }

}
