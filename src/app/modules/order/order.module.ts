import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../core/material/material.module';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
