import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {OrdersComponent} from '@app/home/pages/orders/orders.component';
import {SubmitOrderComponent} from '@app/home/pages/submit-order/submit-order.component';

const routes: Routes = [{
  path: 'orders',
  component: HomeComponent,
  children: [
    {
      path: '',
      component: OrdersComponent
    },
    {
      path: 'save',
      component: SubmitOrderComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
