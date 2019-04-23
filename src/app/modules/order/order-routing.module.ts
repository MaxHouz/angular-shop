import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderComponent } from './order/order.component';
import { OrderActivationGuard } from './guards/order-activation.guard';

const routes: Routes = [
  {
    path: 'order',
    component: OrderComponent,
    canActivate: [OrderActivationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
