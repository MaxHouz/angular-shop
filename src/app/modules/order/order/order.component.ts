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

  ngOnInit() {}

  onConfirmation(): void {
    this.orderService.addOrder({
      items: this.cartService.getCartList(),
      price: this.cartService.getCartTotal(),
      address: 'Address',
      date: Date.now(),
      completed: false
    } as Order);
    this.router.navigate(['/']);
    this.cartService.cleanCart();
  }
}
