import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  user = new BehaviorSubject('');
  user$ = this.user.asObservable();

  constructor() {
  }

  setSessionUser(userData) {
    this.user.next(userData);
  }

  getSessionUserDetails$() {
    return this.user$;
  }

  getSessionUserDetails() {
    return this.user.value;
  }

}
