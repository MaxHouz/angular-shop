import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { Observable, Subscription } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { AppState } from '../../../../core/store/app.state';
import { CartState } from '../../../../core/store/cart/cart.state';
import { CleanCart } from '../../../../core/store/cart/cart.actions';

import { Order } from '../../models/order.models';
import { Product } from '../../../products/models/product.model';
import { OrderService } from '../../services/order.service';

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
    private router: Router,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.cartState$ = this.store.pipe(select('cart'));

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
    this.router.navigate(['/']);
    this.store.dispatch(new CleanCart());
  }
}
