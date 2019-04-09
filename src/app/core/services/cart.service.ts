import { Injectable } from '@angular/core';

import { Product } from '../../modules/products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartList: Product[] = [];

  constructor() { }

  getCartList(): Product[] {
    return this.cartList;
  }

  getCartLength(): number {
    return this.cartList.map((product) => product.quantity)
      .reduce((a, b) => a + b, 0);
  }

  isCartEmpty(): boolean {
    return !!this.cartList.length;
  }

  addProduct(product: Product): void {
    const productIndex = this.cartList.findIndex(p => p.id === product.id);
    if (productIndex > -1) {
      this.updateProduct(productIndex);
    } else {
      this.addNewProduct(product);
    }
  }

  getCartTotal(): number {
    let total = 0;

    this.cartList.forEach(product => total += product.price * product.quantity);

    return total;
  }

  deleteProduct(product: Product): void {
    const index = this.cartList.indexOf(product);
    this.cartList.splice(index, 1);
  }

  increaseQuantity(id: number): void {
    const index = this.cartList.findIndex((product) => product.id === id);
    this.cartList[index].quantity++;
  }

  decreaseQuantity(id: number): void {
    const index = this.cartList.findIndex((product) => product.id === id);
    if (this.cartList[index].quantity > 1) {
      this.cartList[index].quantity--;
    } else {
      this.deleteProduct(this.cartList[index]);
    }
  }

  cleanCart(): void {
    this.cartList = [];
  }

  private addNewProduct(product: Product) {
    const newProduct = { ...product, quantity: 1};
    this.cartList.push(newProduct);
  }

  private updateProduct(index: number): void {
    const updatedProduct  = { ...this.cartList[index] };
    updatedProduct.quantity++;
    this.cartList.splice(index, 1, updatedProduct);
  }
}
