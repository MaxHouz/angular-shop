import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { AppState } from '../../../core/store/app.state';
import { CartState } from '../../../core/store/cart/cart.state';

import { MatBottomSheet } from '@angular/material';
import { CartModalComponent } from '../../../modules/cart/components/cart-modal/cart-modal.component';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss']
})
export class CartButtonComponent implements OnInit {

  cartState$: Observable<CartState>;

  constructor(
    private store: Store<AppState>,
    private matBottomSheet: MatBottomSheet
  ) { }

  ngOnInit() {
    this.cartState$ = this.store.pipe(select('cart'));
  }

  openCartModal(): void {
    this.matBottomSheet.open(CartModalComponent);
  }
}
