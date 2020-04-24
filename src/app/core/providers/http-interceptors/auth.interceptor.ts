import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StorageKeys, StorageService} from '@app/storage';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor{

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const userData = StorageService.instance.getItem(StorageKeys.auth);
    if (userData) {
      request = request.clone({
        headers: request.headers.set('Authorization', userData)
      });
    }

    return next.handle(request);

  }

}
