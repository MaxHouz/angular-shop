import { Component, OnInit } from '@angular/core';

import { Order } from '../../../order/models/order.models';

import { OrderService } from '../../../order/services/order.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent implements OnInit {

  orders: Promise<Order[]>;

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.orders = this.orderService.getOrders();
  }

  onDelete(order: Order): void {
    this.orderService.deleteOrder(order.id)
      .then(() => this.orders = this.orderService.getOrders());
  }
}
