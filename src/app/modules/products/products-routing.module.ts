import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductFeedbackComponent } from './components/product-feedback/product-feedback.component';

import { ProductResolveGuard } from './guards/product-resolve.guard';

const routes: Routes = [
  {
    path: 'products-list',
    component: ProductsListComponent
  },
  {
    path: 'product/:id',
    component: ProductInfoComponent,
    resolve: {
      productData: ProductResolveGuard
    }
  },
  {
    path: 'feedback',
    component: ProductFeedbackComponent,
    outlet: 'feedback',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductsRoutingModule { }
