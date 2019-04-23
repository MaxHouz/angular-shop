import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../../../products/models/product.model';
import { CartService } from '../../../../core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  sortingOrder: boolean;
  selectedSorting: string;

  constructor(
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit() {
  }

  getProductsFromCart(): Product[] {
    return this.cartService.getCartList();
  }

  getCartTotal(): number {
    return this.cartService.getCartTotal();
  }

  onDeleteProduct(product: Product): void {
    this.cartService.deleteProduct(product);
  }

  onIncreaseQuantity(id: number): void {
    this.cartService.increaseQuantity(id);
  }

  onDecreaseQuantity(id: number): void {
    this.cartService.decreaseQuantity(id);
  }

  isCartEmpty(): boolean {
    return this.cartService.isCartEmpty();
  }

  order(): void {
    this.router.navigate(['/order']);
  }

  getSortingOrder(): string {
    return this.sortingOrder ? 'Ascending' : 'Descending';
  }
}
