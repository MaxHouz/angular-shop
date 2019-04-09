import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../core/material/material.module';
import { ProductComponent } from './components/product/product.component';
import { ProductsListComponent } from './components/products-list/products-list.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ProductsListComponent
  ]
})
export class ProductsModule { }
