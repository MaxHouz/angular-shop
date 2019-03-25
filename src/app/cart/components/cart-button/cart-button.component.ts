import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss']
})
export class CartButtonComponent implements OnInit {
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {}

  getProductsCount(): number {
    return this.cartService.getCartList().length;
  }
}
