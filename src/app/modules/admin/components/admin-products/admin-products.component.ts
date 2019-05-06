import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../core/store/app.state';
import * as RouterActions from '../../../../core/store/router/router.actions';

import { Product } from '../../../products/models/product.model';
import { ProductsService } from '../../../products/services/products.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {

  productsList: Observable<Product[]>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.productsList = this.productsService.getProducts();
  }

  onEdit(product: Product): void {
    this.store.dispatch(new RouterActions.Go({
      path: ['./edit', product.id],
      extras: { relativeTo: this.route }
    }));
  }

  onDelete(product: Product): void {
    this.productsService.deleteProduct(product.id).subscribe(
      () => this.productsList = this.productsService.getProducts());
  }
}
