import { Action } from '@ngrx/store';

import { Product } from '../../../modules/products/models/product.model';

export enum CartActionTypes {
  ADD_PRODUCT_TO_CART = '[Cart] ADD_PRODUCT_TO_CART',
  REMOVE_PRODUCT_FROM_CART = '[Cart] REMOVE_PRODUCT_FROM_CART',
  INCREASE_PRODUCT_QUANTITY = '[Cart] INCREASE_PRODUCT_QUANTITY',
  DECREASE_PRODUCT_QUANTITY = '[Cart] DECREASE_PRODUCT_QUANTITY',
  LOAD_CART_FROM_LOCAL_STORAGE = '[Cart] LOAD_CART_FROM_LOCAL_STORAGE',
  LOAD_CART_FROM_LOCAL_STORAGE_SUCCESS = '[Cart] LOAD_CART_FROM_LOCAL_STORAGE_SUCCESS',
  CLEAN_CART = '[Cart] CLEAN_CART'
}

export class AddProductToCart implements Action {
  readonly type = CartActionTypes.ADD_PRODUCT_TO_CART;
  constructor(public payload: Product) {}
}

export class RemoveProductFromCart implements Action {
  readonly type = CartActionTypes.REMOVE_PRODUCT_FROM_CART;
  constructor(public payload: Product) {}
}

export class IncreaseProductQuantity implements Action {
  readonly type = CartActionTypes.INCREASE_PRODUCT_QUANTITY;
  constructor(public payload: Product) {}
}

export class LoadCartFromLocalStorage implements Action {
  readonly type = CartActionTypes.LOAD_CART_FROM_LOCAL_STORAGE;
}

export class LoadCartFromLocalStorageSuccess implements Action {
  readonly type = CartActionTypes.LOAD_CART_FROM_LOCAL_STORAGE_SUCCESS;
  constructor(public payload: Product[]) {}
}

export class DecreaseProductQuantity implements Action {
  readonly type = CartActionTypes.DECREASE_PRODUCT_QUANTITY;
  constructor(public payload: Product) {}
}

export class CleanCart implements Action {
  readonly type = CartActionTypes.CLEAN_CART;
}


export type CartActions
  = AddProductToCart
  | RemoveProductFromCart
  | IncreaseProductQuantity
  | DecreaseProductQuantity
  | LoadCartFromLocalStorage
  | LoadCartFromLocalStorageSuccess
  | CleanCart;
