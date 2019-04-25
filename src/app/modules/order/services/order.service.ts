import { Injectable } from '@angular/core';

import { LocalStorageService } from '../../../core/services/local-storage.service';

import { Order } from '../models/order.models';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  getOrders(): Order[] {
    return JSON.parse(this.localStorageService.getItem('orders'));
  }

  addOrder(order: Order): void {
    const orders = this.getOrders() || [];
    orders.push(order);
    this.updateLocalStorage(orders);
  }

  deleteOrder(id: number): void {
    const orders = this.getOrders() || [];
    const i = orders.findIndex(o => o.id === id);

    if (i > -1) {
      orders.splice(i, 1);
    }

    this.updateLocalStorage(orders);
  }

  private updateLocalStorage(orders: Order[]): void {
    this.localStorageService.setItem('orders', JSON.stringify(orders));
  }
}
