import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, Subscription } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { AppState } from '../../../../core/store/app.state';
import { CartState } from '../../../../core/store/cart/cart.state';
import {
  RemoveProductFromCart,
  IncreaseProductQuantity,
  DecreaseProductQuantity
} from '../../../../core/store/cart/cart.actions';

import { Product } from '../../../products/models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  cartState$: Observable<CartState>;
  cartProducts: Product[];
  sortingOrder: boolean;
  selectedSorting: string;

  private sub: Subscription;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.cartState$ = this.store.pipe(select('cart'));

    this.sub = this.cartState$.subscribe(
      cartState => this.cartProducts = cartState.products
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getProductsFromCart(): Product[] {
    return this.cartProducts;
  }

  onDeleteProduct(product: Product): void {
    this.store.dispatch(new RemoveProductFromCart(product));
  }

  onIncreaseQuantity(product: Product): void {
    this.store.dispatch(new IncreaseProductQuantity(product));
  }

  onDecreaseQuantity(product: Product): void {
    this.store.dispatch(new DecreaseProductQuantity(product));
  }

  order(): void {
    this.router.navigate(['/order']);
  }

  getSortingOrder(): string {
    return this.sortingOrder ? 'Ascending' : 'Descending';
  }
}
