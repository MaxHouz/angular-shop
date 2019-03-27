import { Component, OnInit } from '@angular/core';
import { Product } from '../../../products/models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss']
})
export class CartModalComponent implements OnInit {

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

  deleteProduct(product: Product): void {
    this.cartService.deleteProduct(product);
  }

  isCartEmpty(): boolean {
    return this.cartService.isCartEmpty();
  }

  order(): void {
    alert(`Your order price is: $${this.getCartTotal()}`);
    this.cartService.cleanCart();
  }
}