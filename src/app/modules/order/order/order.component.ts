import { Component, OnInit } from '@angular/core';

import { Order } from '../models/order.models';

import { Router } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(
    private router: Router,
    public cartService: CartService,
    private orderService: OrderService
  ) { }

  ngOnInit() {

  }

  onConfirmation(): void {
    this.orderService.addOrder(this.formOrder());
    this.router.navigate(['/']);
    this.cartService.cleanCart();
  }

  private formOrder(): Order {
    return new Order(
      this.orderService.getOrders() ? this.orderService.getOrders().length + 1 : 1,
      this.cartService.getCartList(),
      this.cartService.getCartTotal(),
      'Address',
      Date.now(),
      false
    );
  }
}
