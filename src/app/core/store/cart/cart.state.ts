import { Product } from '../../../modules/products/models/product.model';

export interface CartState {
  readonly products: Product[];
  readonly empty: boolean;
  readonly cost: number;
  readonly size: number;
}

export const initialCartState: CartState = {
  products: [],
  empty: true,
  cost: 0,
  size: 0
};
