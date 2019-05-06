import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { AppState } from '../../../../core/store/app.state';
import * as CartSelectors from '../../../../core/store/cart/cart.selectors';
import * as RouterActions from '../../../../core/store/router/router.actions';

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

  cartCost$: Observable<number>;
  cartEmpty$: Observable<boolean>;
  cartProducts$: Observable<Product[]>;

  cartProducts: Product[];
  sortingOrder: boolean;
  selectedSorting: string;

  private sub: Subscription;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.cartCost$ = this.store.pipe(select(CartSelectors.getCartCost));
    this.cartEmpty$ = this.store.pipe(select(CartSelectors.getCartEmpty));
    this.cartProducts$ = this.store.pipe(select(CartSelectors.getCartProducts));

    this.sub = this.cartProducts$.subscribe(
      productsList => this.cartProducts = productsList
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
    this.store.dispatch(new RouterActions.Go({
      path: ['/order']
    }));
  }

  getSortingOrder(): string {
    return this.sortingOrder ? 'Ascending' : 'Descending';
  }
}
