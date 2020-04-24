import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppStateService} from '@app/core/states/app-state.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  @Output() signin = new EventEmitter();
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {

  }

  ngOnInit() {
    this.buildLoginForm();
  }

  submit() {
    this.signin.emit(this.loginForm.value);
  }

  private buildLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

}

