import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {map, tap, withLatestFrom} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { AppState } from '../app.state';

import * as CartActions from './cart.actions';

import { CartService } from '../../../modules/cart/services/cart.service';


@Injectable()
export class CartEffects {
  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private cartService: CartService
  ) {}

  @Effect()
  loadCart: Observable<Action> = this.actions$.pipe(
    ofType<CartActions.LoadCartFromLocalStorage>(CartActions.CartActionTypes.LOAD_CART_FROM_LOCAL_STORAGE),
    map((action) => {
      const localStorageCart = this.cartService.getCart() || [];
      return new CartActions.LoadCartFromLocalStorageSuccess(localStorageCart);
    })
  );

  @Effect({dispatch: false})
  updateLocalStorage: Observable<void> = this.actions$.pipe(
    ofType(
      CartActions.CartActionTypes.ADD_PRODUCT_TO_CART,
      CartActions.CartActionTypes.CLEAN_CART,
      CartActions.CartActionTypes.DECREASE_PRODUCT_QUANTITY,
      CartActions.CartActionTypes.INCREASE_PRODUCT_QUANTITY,
      CartActions.CartActionTypes.REMOVE_PRODUCT_FROM_CART
    ),
    withLatestFrom(this.store),
    map(([action, appState]) => {
      this.cartService.updateCart(appState.cart.products);
      console.log(appState.cart.products);
    })
  );
}
