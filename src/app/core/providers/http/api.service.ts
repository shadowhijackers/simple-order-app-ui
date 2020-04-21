import {Injectable} from '@angular/core';
import {UsersService} from './auth/users.service';
import {OrdersService} from '@service/http/orders';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private usersService: UsersService,
    private ordersService: OrdersService
  ) {
  }

  signIn(data) {
    return this.usersService.signIn(data);
  }

  singUp(data) {
    return this.usersService.singUp(data);
  }

  getOrders(selectedDate) {
    return this.ordersService.getOrders(selectedDate);
  }

  saveOrder(data) {
    return this.ordersService.saveOrder(data);
  }

}
