import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../core/material/material.module';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminProductFormComponent } from './components/admin-product-form/admin-product-form.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductComponent } from './components/admin-products/admin-product/admin-product.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminProductsComponent,
    AdminProductFormComponent,
    AdminOrdersComponent,
    AdminProductComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
