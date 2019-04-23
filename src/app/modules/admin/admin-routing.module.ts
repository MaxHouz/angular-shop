import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './components/admin/admin.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminProductFormComponent } from './components/admin-product-form/admin-product-form.component';
import { AdminActivationGuard } from './guards/admin-activation.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AdminActivationGuard],
    children: [
      {
        path: '',
        children: [
          {
            path: 'products',
            component: AdminProductsComponent,
          },
          {
            path: 'products/add',
            component: AdminProductFormComponent
          },
          {
            path: 'products/edit/:id',
            component: AdminProductFormComponent
          }
        ]
      },
      {
        path: 'orders',
        component: AdminOrdersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
