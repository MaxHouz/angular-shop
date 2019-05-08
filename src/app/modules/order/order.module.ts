import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../core/material/material.module';

import { OrderRoutingModule } from './order-routing.module';

import { OrderComponent } from './components/order/order.component';
import { OrderCartComponent } from './components/order-cart/order-cart.component';
import { OrderFormComponent } from './components/order-form/order-form.component';

@NgModule({
  declarations: [
    OrderComponent,
    OrderCartComponent,
    OrderFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
