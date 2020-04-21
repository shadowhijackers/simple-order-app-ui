import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {APPName} from '@app/config';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  @APPName()
  appName: string;

  @Output() page = new EventEmitter();


  isSignIn = true;

  constructor() {
  }

  ngOnInit() {
  }

  togglePage() {
    this.isSignIn = !this.isSignIn;
    this.page.emit({signIn: this.isSignIn});
  }

}
