import {CartState, initialCartState} from './cart.state';
import {CartActions, CartActionTypes} from './cart.actions';

import {Product} from '../../../modules/products/models/product.model';

export function cartReducer(state = initialCartState, action: CartActions): CartState {

  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT_TO_CART: {
      const product = <Product>action.payload;
      const products = [ ...state.products ];
      const productIndex = state.products.findIndex(p => p.id === product.id);

      if (productIndex > -1) {
        products[productIndex].quantity++;
      } else {
        products.push({ ...<Product>action.payload, quantity: 1 });
      }

      return {
        ...state,
        products,
        empty: false,
        cost: state.cost + product.price,
        size: state.size + 1
      };
    }

    case CartActionTypes.REMOVE_PRODUCT_FROM_CART: {
      const product = <Product>action.payload;
      const products = [ ...state.products ];
      const productQuantity = product.quantity;
      const productCost = product.price * productQuantity;
      const productIndex = state.products.findIndex(p => p.id === product.id);

      products.splice(productIndex, 1);

      return {
        ...state,
        products,
        empty: !products.length,
        cost: state.cost - productCost,
        size: state.size - productQuantity
      };
    }

    case CartActionTypes.INCREASE_PRODUCT_QUANTITY: {
      const product = <Product>action.payload;
      const products = [ ...state.products ];
      const productIndex = state.products.findIndex(p => p.id === product.id);

      products[productIndex].quantity++;

      return {
        ...state,
        products,
        cost: state.cost + product.price,
        size: state.size + 1
      };
    }

    case CartActionTypes.DECREASE_PRODUCT_QUANTITY: {
      const product = <Product>action.payload;
      const products = [ ...state.products ];
      const productIndex = state.products.findIndex(p => p.id === product.id);

      if (products[productIndex].quantity > 1) {
        products[productIndex].quantity--;
      } else {
        products.splice(productIndex, 1);
      }

      return {
        ...state,
        products,
        empty: !products.length,
        cost: state.cost - product.price,
        size: state.size - 1
      };
    }

    case CartActionTypes.LOAD_CART_FROM_LOCAL_STORAGE: {
      return { ...state };
    }

    case CartActionTypes.LOAD_CART_FROM_LOCAL_STORAGE_SUCCESS: {
      const products = [ ...<Product[]>action.payload ];
      const cost = products.reduce((price, product) => price + product.price, 0);
      const size = products.reduce((quantity, product) => quantity + product.quantity, 0);

      return {
        ...state,
        products,
        empty: !products.length,
        cost,
        size
      };
    }

    case CartActionTypes.CLEAN_CART: {
      return initialCartState;
    }

    default:
      return { ...state };
  }
}
