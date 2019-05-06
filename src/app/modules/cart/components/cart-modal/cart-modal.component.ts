import {
  OnInit,
  DoCheck,
  Component,
  OnDestroy,
  ChangeDetectionStrategy
} from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { AppState } from '../../../../core/store/app.state';
import * as CartSelectors from '../../../../core/store/cart/cart.selectors';

import {
  RemoveProductFromCart,
  DecreaseProductQuantity,
  IncreaseProductQuantity
} from '../../../../core/store/cart/cart.actions';

import { Product } from '../../../products/models/product.model';
import * as RouterActions from '../../../../core/store/router/router.actions';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartModalComponent implements OnInit, DoCheck, OnDestroy {

  cartCost$: Observable<number>;
  cartEmpty$: Observable<boolean>;
  cartProducts$: Observable<Product[]>;

  cartProducts: Product[];
  lastUpdated: number;
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

  ngDoCheck() {
    this.lastUpdated = Date.now();
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
