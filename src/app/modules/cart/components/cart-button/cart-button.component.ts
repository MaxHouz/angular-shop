import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../../core/services/cart.service';
import { MatBottomSheet } from '@angular/material';
import { CartModalComponent } from '../cart-modal/cart-modal.component';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss']
})
export class CartButtonComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private matBottomSheet: MatBottomSheet
  ) { }

  ngOnInit() {}

  getProductsCount(): number {
    return this.cartService.getCartLength();
  }

  openCartModal(): void {
    this.matBottomSheet.open(CartModalComponent);
  }
}
