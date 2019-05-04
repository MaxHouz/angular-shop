import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { AppState } from '../../../../core/store/app.state';
import { AddProductToCart } from '../../../../core/store/cart/cart.actions';

import { Product } from '../../models/product.model';

import { CartService } from '../../../cart/services/cart.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  public productsList: Observable<Product[]>;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private cartService: CartService,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.productsList = this.productsService.getProducts();
  }

  onBuy(product: Product): void {
    this.onAddToCart(product);
    this.router.navigate(['/order']);
  }

  onAddToCart(product: Product): void {
    this.store.dispatch(new AddProductToCart(product));
  }
}
