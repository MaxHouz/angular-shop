import { Component, OnInit } from '@angular/core';
import {CartService} from '../../../../core/services/cart.service';
import {Product} from '../../../products/models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  sortingOrder: boolean;
  selectedSorting: string;

  constructor(
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
    alert(`Your order price is: $${this.getCartTotal()}`);
    this.cartService.cleanCart();
  }

  getSortingOrder(): string {
    return this.sortingOrder ? 'Ascending' : 'Descending';
  }
}
