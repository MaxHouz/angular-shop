import { Injectable } from '@angular/core';

import { LocalStorageService } from '../../../core/services/local-storage.service';

import { Product } from '../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(
    private localStorageService: LocalStorageService
  ) { }

  getCart(): Product[] {
    return JSON.parse(this.localStorageService.getItem('cart')) as Product[];
  }

  updateCart(cart: Product[]): void {
    this.localStorageService.setItem('cart', JSON.stringify(cart));
  }

  cleanLocalCart(): void {
    this.localStorageService.removeItem('cart');
  }
}
