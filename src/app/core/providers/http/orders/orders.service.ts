import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(
    private http: HttpClient
  ) {
  }

  getOrders(selectedDate) {
    const url = environment.url + '/orders?order_date=' + selectedDate;
    return this.http.get(url);
  }

  saveOrder(data) {
    const url = environment.url + '/orders';
    return this.http.post(url, data);
  }

}
