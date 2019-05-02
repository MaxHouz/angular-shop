import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../core/material/material.module';
import { HttpClientModule } from '@angular/common/http';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
