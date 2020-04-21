import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {SharedModule} from '@shared/shared.module';
import {HeaderComponent} from './components/header/header.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { SubmitOrderComponent } from './pages/submit-order/submit-order.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    OrdersComponent,
    SubmitOrderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
