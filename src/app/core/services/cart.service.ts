import { Injectable } from '@angular/core';
import { Product } from '../../modules/products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartList: Product[] = [];
  private cartLength = 0;

  constructor() { }

  getCartList(): Product[] {
    return this.cartList;
  }

  getCartLength(): number {
    return this.cartLength;
  }

  addProduct(product: Product): void {
    this.cartLength++;
    const productIndex = this.cartList.findIndex(p => p.id === product.id);
    if (productIndex > -1) {
      this.updateProduct(productIndex);
    } else {
      this.addNewProduct(product);
    }
  }

  getCartTotal(): number {
    let total = 0;

    this.cartList.forEach(product => total += product.price);

    return total;
  }

  deleteProduct(product): void {
    const index = this.cartList.indexOf(product);
    this.cartLength =  this.cartLength - this.cartList[index].quantity;
    this.cartList.splice(index, 1);
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
