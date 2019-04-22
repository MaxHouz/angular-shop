import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../core/material/material.module';
import { ProductsRoutingModule } from './products-routing.module';

import { ProductComponent } from './components/product/product.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ProductFeedbackComponent } from './components/product-feedback/product-feedback.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductsListComponent,
    ProductInfoComponent,
    ProductFeedbackComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ProductsRoutingModule
  ],
  exports: [
    ProductsListComponent
  ],
  entryComponents: [ProductFeedbackComponent]
})
export class ProductsModule { }
