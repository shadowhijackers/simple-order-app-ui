import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) {
  }

  signIn(data) {
    const url = environment.url + '/users/login';
    return this.http.post(url, data);
  }

  singUp(data) {
    const url = environment.url + '/users/register';
    return this.http.post(url, data);
  }

}
