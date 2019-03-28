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

  isCartEmpty(): boolean {
    return !!this.cartList.length;
  }

  addProduct(product: Product): void {
    this.cartList.push(product);
  }

  getCartTotal(): number {
    let total = 0;

    this.cartList.forEach(product => total += product.price);

    return total;
  }

  deleteProduct(product): void {
    const index = this.cartList.indexOf(product);
    this.cartList.splice(index, 1);
  }

  cleanCart(): void {
    this.cartList = [];
  }
}
