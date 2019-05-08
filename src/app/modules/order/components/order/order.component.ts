import {Component, OnDestroy, OnInit} from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { AppState } from '../../../../core/store/app.state';
import { CartState } from '../../../../core/store/cart/cart.state';
import { CleanCart } from '../../../../core/store/cart/cart.actions';
import { getCartState } from '../../../../core/store/cart/cart.selectors';

import { Order } from '../../models/order.models';
import { Product } from '../../../products/models/product.model';
import { OrderService } from '../../services/order.service';
import * as RouterActions from '../../../../core/store/router/router.actions';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  cartState$: Observable<CartState>;
  cartProducts: Product[];
  cartCost: number;

  private sub: Subscription;

  constructor(
    private store: Store<AppState>,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.cartState$ = this.store.pipe(select(getCartState));

    this.sub = this.cartState$.subscribe(
      cartState => {
        this.cartProducts = cartState.products;
        this.cartCost = cartState.cost;
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onConfirmation(): void {
    this.orderService.addOrder({
      items: this.cartProducts,
      price: this.cartCost,
      address: 'Address',
      date: Date.now(),
      completed: false
    } as Order);
    this.store.dispatch(new RouterActions.Go({
      path: ['/']
    }));
    this.store.dispatch(new CleanCart());
  }
}
