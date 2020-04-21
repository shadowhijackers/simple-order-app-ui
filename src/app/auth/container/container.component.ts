import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {ApiService} from '@service/http/api.service';
import {MessageService} from '@shared/providers';
import {StorageKeys, StorageService} from '@app/storage';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  isSignIn = true;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private msgService: MessageService
  ) {
  }

  ngOnInit() {
  }

  signIn(data) {

    if (data) {
      this.apiService.signIn(data).subscribe((res: any) => {
        if (!res.error) {
          if (res.type === 'admin') {
            this.router.navigateByUrl('/orders');
          } else {
            this.router.navigateByUrl('/orders/save');
          }
          return;
        }
        this.msgService.showSnackBar(res.error);
      });
    }
  }

  signUp(data) {
    if (data) {
      this.apiService.singUp(data).subscribe((res: any) => {
        if (!res.error) {
          this.msgService.showSnackBar('successfully registered');
          StorageService.instance.setItem(StorageKeys.userData, JSON.stringify(res));
          this.router.navigateByUrl('/orders/save');
          return;
        }
        this.msgService.showSnackBar(res.error);
      });
    }
  }

  changePage(pageReq: { signIn: boolean }) {
    this.isSignIn = pageReq.signIn;
  }

}
