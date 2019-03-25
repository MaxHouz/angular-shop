import { Injectable } from '@angular/core';
import { Product } from '../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartList: Product[] = [];

  constructor() { }

  getCartList(): Product[] {
    return this.cartList;
  }
  // isCartEmpty(): boolean {}

  addProduct(product: Product): void {
    this.cartList.push(product);
  }
}
