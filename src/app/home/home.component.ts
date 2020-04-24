import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StorageKeys, StorageService} from '@app/storage';
import {AppStateService} from '@app/core/states/app-state.service';

const NAV_DATAS = [
  {
    name: 'ORDERS',
    routerLink: '/orders',
    icon: 'home'
  },
  {
    name: 'NEW ORDER',
    routerLink: '/orders/save',
    icon: 'fiber_new'
  },
  {
    name: 'LOGOUT',
    routerLink: '.',
    icon: 'power_settings_new'
  },
];

@Component({
  selector: 'candidates-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  navDatas = NAV_DATAS;

  constructor(
    private router: Router,
    private appState: AppStateService,
  ) {
  }

  ngOnInit() {
  }

  selectNav(data: { routerLink: string; name: string; icon: string }) {

    if (data.name === 'LOGOUT') {
      StorageService.instance.setItem(StorageKeys.auth, '');
      StorageService.instance.setItem(StorageKeys.userData, '');
      this.appState.setSessionUser('');
      this.router.navigateByUrl('/');
      return;
    }
    this.router.navigateByUrl(data.routerLink);

  }

}
