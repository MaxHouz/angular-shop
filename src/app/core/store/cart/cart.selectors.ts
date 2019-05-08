import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CartState } from './cart.state';

export const getCartState = createFeatureSelector<CartState>('cart');

export const getCartProducts = createSelector(
  getCartState,
  (state: CartState) => state.products
);
export const getCartEmpty = createSelector(
  getCartState,
  (state: CartState) => state.empty
);
export const getCartCost = createSelector(
  getCartState,
  (state: CartState) => state.cost
);
export const getCartSize = createSelector(
  getCartState,
  (state: CartState) => state.size
);
